import React from 'react';

import { Typography, Box } from '@material-ui/core/';
import { Rating } from '@material-ui/lab/';

import { Styles } from './styles';

function Cadastro() {
  const [value, setValue] = React.useState(2);
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
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Descrição</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
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
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
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
                      value="Sim"
                      checked
                    />
                    Sim
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="contact-preference"
                      id="contact-preference"
                      value="Nao"
                      checked
                    />
                    Não
                  </label>
                </div>
              </div>
            </div>
            <div className="actions">
              <button type="submit" className="btn btn-primary btn-save">
                Finalizar
              </button>
              <button type="submit" className="btn btn-primary btn-cancel">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </Styles>
  );
}

export default Cadastro;
