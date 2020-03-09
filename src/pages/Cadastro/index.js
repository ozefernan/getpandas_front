/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { Typography, Box } from '@material-ui/core/';
import { Rating } from '@material-ui/lab/';
import { toast } from 'react-toastify';
import { getToken } from '../../shared/auth';
import api from '../../shared/api';

import { Styles } from './styles';

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      endereco: '',
      descricao: '',
      avaliacao: '',
      atracao: false,
    };
  }

  cancelPoint = () => {
    toast.error('🦄 Cancelado', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setTimeout(() => {
      this.props.history.push('/');
    }, 2000);
  };

  handleNewPoint = () => {
    const { nome, endereco, descricao, avaliacao, atracao } = this.state;

    console.log(
      `${nome} - ${endereco} - ${descricao} - ${avaliacao} - ${atracao}`
    );

    if (nome || endereco || descricao || avaliacao || atracao) {
      api
        .post('pontoturistico/', {
          nome,
          endereco,
          descricao,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Token ${getToken()}`,
          },
        })
        .then(response => {
          if (response.data.authenticated) {
            toast.success('🦄 Ponto Turistico Adiconado', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          } else {
            toast.error(response.data.message, {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });

            this.props.history.push('/');
          }
        })
        .catch(() => {
          toast.error(
            'Houve um problema com o login, verifique suas credenciais.'
          );
        });
    }
  };

  render() {
    return (
      <Styles>
        <div>
          <nav className="navbar navbar-light shadow p-3 mb-5 bg-primary">
            <a className="nav-brand text-white">Realizar Cadastro</a>
          </nav>
          <div className="container">
            <form>
              <h2>Ponto Turístico</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name_point">Nome do Ponto</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      id="name_point"
                      onChange={e => this.setState({ nome: e.target.value })}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="end">Endereço</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      id="end"
                      onChange={e =>
                        this.setState({ endereco: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Descrição
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      onChange={e =>
                        this.setState({ descricao: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="file">Insira 3 Fotos</label>
                    <input
                      type="file"
                      className="form-control"
                      id="upload"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="col-md-3">
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography className="label-rating" component="legend">
                      Avaliação
                    </Typography>
                    <Rating
                      size="large"
                      name="simple-controlled"
                      // value={value}
                      // onChange={(event, newValue) => {
                      //   setValue(newValue);
                      // }}
                      onChange={e =>
                        this.setState({ avaliacao: e.target.value })
                      }
                    />
                  </Box>
                </div>

                <div className="col-md-3">
                  <label htmlFor="contact-preference">
                    Possui alguma atração ?
                  </label>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="contact-preference"
                        id="contact-preference"
                        value="true"
                        onChange={e =>
                          this.setState({ atracao: e.target.value })
                        }
                      />
                      Sim
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="contact-preference"
                        id="contact-preference"
                        value="false"
                        defaultChecked
                        onChange={e =>
                          this.setState({ atracao: e.target.value })
                        }
                      />
                      Não
                    </label>
                  </div>
                </div>
              </div>
              <div className="actions">
                <Button
                  variant=""
                  type="button"
                  className="btn btn-primary btn-save"
                  onClick={this.handleNewPoint}
                >
                  Salvar
                </Button>
                <Button
                  variant=""
                  type="button"
                  className="btn btn-primary btn-cancel"
                  onClick={this.cancelPoint}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Styles>
    );
  }
}

export default Cadastro;
