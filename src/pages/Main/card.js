/* eslint-disable react/prop-types */
import React from 'react';

function Card(props) {
  const { register } = props;

  return (
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
  );
}

export default Card;
