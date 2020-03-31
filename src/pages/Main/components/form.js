import React, { Component } from 'react';
// import { uniqueId } from 'lodash';
// import filesize from 'filesize';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Rating from '@material-ui/lab/Rating';
import Switch from '@material-ui/core/Switch';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Grid from '@material-ui/core/Grid';

import { FormGroup, Button } from 'react-bootstrap';
import Select from 'react-select';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import FileList from './FileList';
import Upload from './Upload';

import api from '../../../shared/api';
import { login, getToken } from '../../../shared/auth';

import { Styles } from './stylesForm';
import { Container, Content } from '../styles';

const schema = Yup.object().shape({
  nome: Yup.string().required('O Username é obrigatório'),
  endereco: Yup.string().required('A senha é obrigatório'),
  descricao: Yup.string().required('A senha é obrigatório'),
});

class BasicTextFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.alter,
      register: props.register,
      nome: '',
      descricao: '',
      aprovado: false,
      endereco: '',
      stars: 0,
      uploadedFiles: [],
    };
  }

  // handleUpload = files => {
  //   const uploadedFiles = files.map(file => ({
  //     file,
  //     id: uniqueId(),
  //     name: file.name,
  //     readableSize: filesize(file.size),
  //     preview: URL.createObjectURL(file),
  //     progress: 0,
  //     uploaded: false,
  //     error: false,
  //     url: null,
  //   }));

  //   this.setState({
  //     uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles),
  //   });

  //   uploadedFiles.forEach(this.processUpload);
  // };

  // updateFile = (id, data) => {
  //   this.setState({
  //     uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
  //       return id === uploadedFile.id
  //         ? { ...uploadedFile, ...data }
  //         : uploadedFile;
  //     }),
  //   });
  // };

  // handleDelete = async id => {
  //   await api.delete(`posts/${id}`);

  //   this.setState({
  //     uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id),
  //   });
  // };

  // componentWillUnmount() {
  //   this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
  // }

  // processUpload = uploadedFile => {
  //   const data = new FormData();

  //   data.append('file', uploadedFile.file, uploadedFile.name);

  //   api
  //     .post('posts', data, {
  //       onUploadProgress: e => {
  //         const progress = parseInt(Math.round((e.loaded * 100) / e.total));

  //         this.updateFile(uploadedFile.id, {
  //           progress,
  //         });
  //       },
  //     })
  //     .then(response => {
  //       this.updateFile(uploadedFile.id, {
  //         uploaded: true,
  //         id: response.data._id,
  //         url: response.data.url,
  //       });
  //     })
  //     .catch(() => {
  //       this.updateFile(uploadedFile.id, {
  //         error: true,
  //       });
  //     });
  // };

  handleChange = event => {
    this.setState({
      ...this.aprovado,
      [event.target.name]: event.target.checked,
    });
  };

  handleSave = () => {
    const { nome, endereco, aprovado, stars, descricao, type } = this.state;

    if (nome || endereco || aprovado || stars || descricao) {
      if (type) {
        console.log('Alteracao enviada')
        // api
        //   .post('pontoturistico/', { nome, descricao, endereco })
        //   .then(response => {
        //     toast.success('Ponto turistico adicionado', {
        //       position: 'top-center ',
        //       hideProgressBar: false,
        //       closeOnClick: true,
        //       pauseOnHover: true,
        //       draggable: true,
        //     });
        //     setTimeout(() => {
        //       window.location.reload();
        //     }, 3000);
        //   })
        //   .catch(response => {
        //     console.log("Catch")
        //   });
      } else {
        console.log('Creacao enviada')
        // api
        //   .post('pontoturistico/', { nome, descricao, endereco })
        //   .then(response => {
        //     toast.success('Ponto turistico adicionado', {
        //       position: 'top-center ',
        //       hideProgressBar: false,
        //       closeOnClick: true,
        //       pauseOnHover: true,
        //       draggable: true,
        //     });
        //     setTimeout(() => {
        //       window.location.reload();
        //     }, 3000);
        //   })
        //   .catch(response => {
        //     console.log("Catch")
        //   });
      }
    }
  };

  // componentDidMount = () => {
  //   api
  //     .get('enderecos/')
  //     .then(response => {
  //       console.log(response)
  //     })
  // }

  render() {
    const { aprovado, uploadedFiles, register } = this.state;

    console.log(register);

    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
      <Styles>
        <Form className="form" schema={schema}>
          <FormGroup>
            <Grid container spacing={3} className="grid">
              <Grid item xs={8}>
                <Input
                  className="input"
                  name="Nome"
                  id="Nome"
                  type="text"
                  placeholder="Nome"
                  value={register ? register.nome : null}
                  onChange={e => this.setState({ nome: e.target.value })}
                />
              </Grid>
              <Grid item xs={4}>
                <Select options={this.handleArray} placeholder="Endereco"
                  value={this.endereco}
                  onChange={e => this.setState({ endereco: e.value })}
                />
              </Grid>
              <Grid item xs={3}>
                <Select options={options} placeholder="Atracoes" />
              </Grid>
              <Grid item xs={9}>
                <Select options={options} placeholder="Comentarios" />
              </Grid>
              <Grid item xs={3}>
                <Select options={options} placeholder="Avaliacoes" />
              </Grid>
              <Grid item xs={4}>
                <Select options={options} placeholder="Doc. Indentificacao" />
              </Grid>
              <Grid item xs={5} sm={3} lg={2} className="selector">
                <FormControlLabel
                  control={
                    <Switch
                      defaultChecked={register}
                      checked={register ? register.aprovado : aprovado}
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
          <Container>
            <Content>
              <Upload onUpload={this.handleUpload} />
              {!!uploadedFiles.length && (
                <FileList files={uploadedFiles} onDelete={this.handleDelete} />
              )}
            </Content>
          </Container>
          <Button className="submitButton" type="submit" onClick={this.handleSave}>
            SALVAR
          </Button>
        </Form>
      </Styles>
    );
  }
}

export default BasicTextFields;
