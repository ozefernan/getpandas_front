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
            <div className="col-md-10 col-lg-8 col-xl-5">
              <div className="card card-fora">
                <section className="form-elegant scrollbar-light-blue">
                  <div className="card-body mx-4">
                    <div className="text-center">
                      <h2 className="dark-grey-text mb-5 text-lista">Lista</h2>
                    </div>
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
                    <div className="photo-main">
                      <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            className="active"
                          />
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="1"
                          />
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="2"
                          />
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              className="d-block w-100"
                              src=""
                              data-color="lightblue"
                              alt="First Image"
                            />
                            <div className="carousel-caption d-md-block">
                              <h5>First Image</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    Carrossel
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

export default Main;
