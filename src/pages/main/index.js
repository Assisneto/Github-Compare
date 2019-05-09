import React, { Component } from 'react';
import moment from 'moment';
import api from '../../service/api';
import logo from '../../assets/logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList/index';

export default class main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
    const { repositoryInput } = this.state;
    const response = await api.get(`${repositoryInput}`);
    const { repositories } = this.state;
    response.data.lastCommit = moment(response.data.pushed_at).fromNow();

    this.setState({
      repositoryInput: '',
      repositories: [...repositories, response.data],
    });
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="user/repository"
            // eslint-disable-next-line react/destructuring-assignment
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">submit</button>
        </Form>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
