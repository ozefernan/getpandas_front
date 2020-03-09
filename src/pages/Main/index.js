/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import { Styles } from './styles';
import { getToken } from '../../shared/auth';
import api from '../../shared/api';
import Card from './card';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
    };
  }

  componentDidMount() {
    console.log('DidMount');
    api
      .get(
        `pontoturistico/`,
        {
          headers: {
            Authorization: `Token ${getToken()}`,
          },
        },
        {}
      )
      .then(response => this.updateResult(response.data));
  }

  updateResult = data => {
    this.setState({
      result: data,
    });
  };

  render() {
    const { result } = this.state;

    return (
      <Styles>
        <div>
          <nav className="navbar navbar-light shadow p-3 mb-5 bg-primary rounded">
            <a className="nav-brand text-white">Pontos Turísticos</a>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-5">
                <div className="card card-fora">
                  <section className="form-elegant scrollbar-light-blue">
                    <div className="card-body mx-4">
                      <div className="text-center">
                        <h2 className="dark-grey-text mb-5 text-lista">
                          Lista
                        </h2>
                      </div>

                      {result
                        ? result.map(reg => (
                          <Card key={reg.descricao} register={reg} />
                        ))
                        : null}

                      <div>
                        <div className="card w-100">
                          <div className="card-body">
                            <h5 className="card-title">Cristo Redentor</h5>
                            <p className="card-text">Descrição</p>
                            <button
                              className="btn btn-primary"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseExample"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              Mais Informações
                            </button>
                          </div>
                        </div>
                        <br />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="col-md-6">
                <section className="product">
                  <div className="product__photo">
                    <div className="photo-container">
                      <div className="photo-main" />
                    </div>
                  </div>
                  <div className="product__info">
                    <div className="title">
                      <h1>Cristo Redentor</h1>
                      <span>Endereço ......</span>
                    </div>
                    <div className="price">
                      <span>Algo que queria colocar</span>
                    </div>
                    <div className="description">
                      <h3>Descrição</h3>
                      <p>Oi eu sou muito lindo e charmoso</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Styles>
    );
  }
}

export default Main;
