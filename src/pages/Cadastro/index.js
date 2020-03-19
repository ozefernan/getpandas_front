/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import api from '../../shared/api';
import { Styles } from './styles';
import { getToken } from '../../shared/auth';

import SimplePaper from '../components/paperForm';
import Form from '../components/form';

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
    };
  }

  updateResult = data => {
    this.setState({
      result: data,
    });
  };

  render() {
    return (
      <Styles>
        <SimplePaper />
        <Container maxWidth="md">
          <Form />
        </Container>
      </Styles>
    );
  }
}

export default Cadastro;
