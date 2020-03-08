import React from 'react';
import { Styles } from './styles';

function Cadastro() {
  return (
    <Styles>
      <div>
        <nav className="navbar navbar-light shadow p-3 mb-5 bg-primary rounded">
          <a className="nav-brand text-white">Realizar Cadastro</a>
        </nav>
        <div class="container">
          <form>
            <h2>Ponto Turístico</h2>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="name_point">Nome do Ponto</label>
                  <input type="text" class="form-control" placeholder="" id="name_point" />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label for="end">Endereço</label>
                  <input type="text" class="form-control" placeholder="" id="end" />
                </div>
              </div>
            </div>


            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="avaliacao">Avaliação</label>
                  <input type="number" class="form-control" placeholder="Informe de 1 a 5" id="avaliacao" />
                </div>


              </div>

              <div class="col-md-6">

                <div class="form-group">
                  <label for="phone">Oque ?</label>
                  <input type="tel" class="form-control" id="phone" placeholder="" />
                </div>
              </div>
            </div>



            <label for="contact-preference">Possui alguma atração ?</label>
            <div class="radio">
              <label>
                <input type="radio" name="contact-preference" id="contact-preference" value="Sim" checked />Sim
      </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="contact-preference" id="contact-preference" value="Nao" checked />Não
      </label>
            </div>




            <button type="submit" class="btn btn-primary">Finalizar</button>
          </form>
        </div>
      </div>
    </Styles>
  );
}

export default Cadastro;
