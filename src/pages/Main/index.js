import React from 'react';
import { Styles } from './styles';

function Main() {
  return (
    <Styles>
      <div>
        <nav className="navbar navbar-light shadow p-3 mb-5 bg-primary rounded">
          <a className="nav-brand text-white">Pontos Turísticos</a>
        </nav>
        <div className="container">
          <div className="row">
            <div class="col-md-10 col-lg-8 col-xl-5">

              <div class="card card-fora">
                <section class="form-elegant scrollbar-light-blue">
                  <div class="card-body mx-4">
                    <div class="text-center">
                      <h2 class="dark-grey-text mb-5 text-lista">Lista</h2>
                    </div>
                    <div>
                      <div class="card w-100">
                        <div class="card-body">
                          <h5 class="card-title">Cristo Redentor</h5>
                          <p class="card-text">Descrição</p>
                          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
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
            <div class="col-md-6">
              <section class="product">
                <div class="product__photo">
                  <div class="photo-container">
                    <div class="photo-main">

                      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="" data-color="lightblue" alt="First Image" />
                            <div class="carousel-caption d-md-block">
                              <h5>First Image</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    Carrossel
                  </div>
                </div>
                <div class="product__info">
                  <div class="title">
                    <h1>Cristo Redentor</h1>
                    <span>Endereço ......</span>
                  </div>
                  <div class="price">
                    <span>Algo que queria colocar</span>
                  </div>
                  <div class="description">
                    <h3>Descrição</h3>
                    <p>
                      Oi eu sou muito lindo e charmoso
                    </p>

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

export default Main;
