/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import Container from '@material-ui/core/Container';
/* Card */
import GridList from '@material-ui/core/GridList';
/**/

import api from '../../shared/api';
import { Styles } from './styles';
import { getToken } from '../../shared/auth';

import MenuAppBar from '../components/header';
import SimplePaper from '../components/paper';
import Card from '../components/card';
// import Card from './components/Card';
import ToolsPaper from './components/toolsPaper';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
    };
  }

  componentDidMount() {
    api
      .get('pontoturistico/')
      .then(response => {
        this.updateResult(response.data.results)
      })
      .catch(error => {
        console.log(error);
      });
  };

  updateResult = data => {
    this.setState({
      result: data,
    });
  };

  render() {
    const { result } = this.state;

    return (
      <Styles>
        <MenuAppBar />
        <SimplePaper />
        <Container>
          <ToolsPaper />
        </Container>
        <Container fixed>
          <div>
            <GridList cellHeight={180} style={{ justifyContent: 'center' }}>
              {result && result.map(reg => <Card key="" register={reg} />)}
            </GridList>
          </div>
        </Container>
      </Styles>
    );
  }
}

export default Main;
