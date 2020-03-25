import React, { Component } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Rating from '@material-ui/lab/Rating';
import Switch from '@material-ui/core/Switch';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Grid from '@material-ui/core/Grid';

import { FormGroup, Button } from 'react-bootstrap';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
// import { toast } from 'react-toastify';

import { Styles } from './stylesForm';

const schema = Yup.object().shape({
  nome: Yup.string().required('O Username é obrigatório'),
  endereco: Yup.string().required('A senha é obrigatório'),
  descricao: Yup.string().required('A senha é obrigatório'),
});

class BasicTextFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aprovado: true,
      nome: '',
      endereco: '',
      stars: 0,
      descricao: '',
    };
  }

  handleChange = event => {
    this.setState({
      ...this.aprovado,
      [event.target.name]: event.target.checked,
    });
  };

  handleSave = () => {
    const { nome, endereco, aprovado, stars, descricao } = this.state;
    console.log(
      `Teste: ${nome}, ${endereco}, ${aprovado}, ${stars}, ${descricao}`
    );
    // const { username, password } = this.state;
    // if (username || password) {
    //   // api
    //   //   .post('api-token-auth/', { username, password })
    //   //   .then(response => {
    //   //     if (response.data.token) {
    //   // login(response.data.token);
    //   this.props.history.push('/main');
    //   toast.success('TESTE LOGIN OK!', {
    //     position: 'top-right',
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //   });
    // } else {
    //   // toast.error(response.data.message, {
    //   toast.error('TESTE LOGIN OK!', {
    //     position: 'top-right',
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //   });
    //   document.getElementById('username').value = '';
    //   document.getElementById('password').value = '';
    //   document.getElementById('username').focus();
    // }
    // // })
    // // .catch(() => {
    // //   toast.error(
    // //     '🦄 Houve um problema com o login, verifique suas credenciais.'
    // //   );
    // //   document.getElementById('username').value = '';
    // //   document.getElementById('password').value = '';
    // //   document.getElementById('username').focus();
    // // });
    // // }
  };

  render() {
    const { aprovado } = this.state;

    return (
      <Styles>
        <Form className="form" schema={schema} onSubmit={this.handleSave}>
          <FormGroup>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Input
                  className="input"
                  name="Nome"
                  id="Nome"
                  type="text"
                  placeholder="Nome"
                  onChange={e => this.setState({ nome: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={7}>
                <Input
                  className="input"
                  name="Endereco"
                  id="Endereco"
                  type="text"
                  placeholder="Endereco"
                  onChange={e => this.setState({ endereco: e.target.value })}
                />
              </Grid>
              <Grid item xs={5} sm={3} lg={2} className="selector">
                <FormControlLabel
                  control={
                    <Switch
                      checked={aprovado}
                      onChange={this.handleChange}
                      name="aprovado"
                    />
                  }
                  label="Aprovado"
                  labelPlacement="start"
                />
              </Grid>
              <Grid item xs={6} sm={3} lg={3} className="selector">
                <Rating
                  name="customized-empty"
                  defaultValue={0}
                  precision={1}
                  emptyIcon={<StarBorderIcon fontSize="inherit" />}
                  size="large"
                  onChange={e => this.setState({ stars: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  className="input"
                  name="Descricao"
                  id="Descricao"
                  type="text"
                  multiline
                  placeholder="Descricao"
                  onChange={e => this.setState({ descricao: e.target.value })}
                />
              </Grid>

              {/* <Grid item xs={10} className={classes.input}>
              <input
                accept="image/*"
                className={classes.teste}
                id="button-file"
                multiple
                type="file"
              />
              <label htmlFor="button-file">
                <Button
                  className={classes.buttonUpload}
                  variant="contained"
                  color="primary"
                  component="span"
                >
                  Upload
                </Button>
              </label>
            </Grid> */}
            </Grid>
          </FormGroup>
          <Button className="submitButton" variant onClick={this.handleSave}>
            SALVAR
          </Button>
        </Form>
      </Styles>
    );
  }
}

export default BasicTextFields;
