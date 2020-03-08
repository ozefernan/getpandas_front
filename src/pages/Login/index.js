/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { FormGroup, Button } from 'react-bootstrap';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
// import { toast } from 'react-toastify';

// import api from '../../shared/api';
// import { login } from '../../shared/services/auth';
import { Styles } from './styles';
import logo from '../../shared/images/logo2.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatório'),
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // email: '',
      // password: '',
    };
  }

  // handleSignIn = () => {
  //   const { email, password } = this.state;
  //   if (email || password) {
  //     api
  //       .post('/api/login', { email, password })
  //       .then(response => {
  //         if (response.data.authenticated) {
  //           login(response.data.acessToken);
  //           this.props.history.push('/admin');
  //         } else {
  //           toast.error(response.data.message, {
  //             position: 'top-right',
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //           });
  //           document.getElementById('password').value = '';
  //           document.getElementById('password').focus();
  //         }
  //       })
  //       .catch(() => {
  //         toast.error(
  //           'Houve um problema com o login, verifique suas credenciais.'
  //         );
  //       });
  //   }
  // };

  render() {
    return (
      <Styles>
        <section className="s-login">
          <div className="page-right">
            <div className="imag">
              <img src={logo} alt="Logo" />
            </div>
            <Form className="form" schema={schema} onSubmit={this.handleSignIn}>
              <FormGroup>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email"
                // onChange={e => this.setState({ email: e.target.value })}
                />
                <Input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Senha"
                // onChange={e => this.setState({ password: e.target.value })}
                />
              </FormGroup>
              <div className="functions">
                <Button className="button" type="submit">
                  Entrar
                </Button>
                <a className="forgot" href="/">
                  Esqueceu sua senha?
                </a>
                <div className="bar-ou">
                  <hr />
                  ou
                  <hr />
                </div>
                <Button
                  className="singup"
                  variant
                // onClick={this.handleSignIn}
                >
                  Cadastre-se
                </Button>
              </div>
            </Form>
            <footer className="footer">
              Copyright © 2020 GetPandas. Todos os direitos reservados.
              <br />
              Termos e condições | Políticas de privacidade
            </footer>
          </div>
          <div className="page-left">
            <div className="wrapper">
              <div className="slideshows">
                <div className="slideshow slideshow--hero">
                  <div className="slides">
                    <div className="slide slide1" />
                    <div className="slide slide2" />
                    <div className="slide slide3" />
                    <div className="slide slide4" />
                  </div>
                </div>
                <div className="slideshow slideshow--contrast slideshow--contrast--before">
                  <div className="slides">
                    <div className="slide slide1" />
                    <div className="slide slide2" />
                    <div className="slide slide3" />
                    <div className="slide slide4" />
                  </div>
                </div>
                <div className="slideshow slideshow--contrast slideshow--contrast--after">
                  <div className="slides">
                    <div className="slide slide1" />
                    <div className="slide slide2" />
                    <div className="slide slide3" />
                    <div className="slide slide4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlay1" />
          <div className="overlay2" />
          <div className="overlay3" />
        </section>
      </Styles>
    );
  }
}

export default withRouter(Login);
