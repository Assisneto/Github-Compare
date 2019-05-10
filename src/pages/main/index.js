import React, { Component } from 'react';
import moment from 'moment';
import api from '../../service/api';
import logo from '../../assets/logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList/index';

export default class main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: JSON.parse(localStorage.getItem('repositories')) || [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { repositoryInput } = this.state;
    try {
      const response = await api.get(`${repositoryInput}`);
      const { repositories } = this.state;
      response.data.lastCommit = moment(response.data.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, response.data],
        repositoryError: false,
      });
      localStorage.setItem('repositories', JSON.stringify(this.state.repositories));
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="user/repository"
            // eslint-disable-next-line react/destructuring-assignment
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {/* eslint-disable-next-line react/destructuring-assignment */}
            {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'ok'}
          </button>
        </Form>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
