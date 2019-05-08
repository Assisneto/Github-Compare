import React from 'react';

import logo from '../../assets/logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList/index';

const Main = () => (
  <Container>
    <img src={logo} alt="Github Compare" />
    <Form>
      <input type="text" placeholder="user/repository" />
      <button type="submit">submit</button>
    </Form>
    <CompareList />
  </Container>
);

export default Main;
