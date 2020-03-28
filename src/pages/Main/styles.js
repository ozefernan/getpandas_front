import styled from 'styled-components';

import slide1 from '../../shared/images/slide1.jpg';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;

export const Styles = styled.div`
  scroll-behavior: smooth;

  .banner {
    .text-banner {
      position: absolute;
      top: 250px;
      left: 50%;
      transform: translate(-50%, -50%);

      color: #ffffff;
      text-align: center;
      font-family: 'Roboto';

      p {
        font-size: 13px;
        margin: 0;
      }

      span {
        font-size: 40px;
      }
    }
  }

  .form-elegant .font-small {
    font-size: 0.8rem;
  }

  .form-elegant .z-depth-1a {
    -webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26),
      0 4px 12px 0 rgba(121, 155, 254, 0.25);
    box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26),
      0 4px 12px 0 rgba(121, 155, 254, 0.25);
  }

  .form-elegant .z-depth-1-half,
  .form-elegant .btn:hover {
    -webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28),
      0 4px 15px 0 rgba(36, 133, 255, 0.15);
    box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28),
      0 4px 15px 0 rgba(36, 133, 255, 0.15);
  }

  .form-elegant,
  .form-dark {
    position: relative;
    height: 550px;
    overflow-y: scroll;
    background-color: #afadad;
  }
  .mb-5 {
    margin-bottom: 1rem !important;
  }

  .form-dark .font-small {
    font-size: 0.8rem;
  }

  .form-dark [type='radio'] + label,
  .form-dark [type='checkbox'] + label {
    font-size: 0.8rem;
  }

  .form-dark [type='checkbox'] + label:before {
    top: 2px;
    width: 15px;
    height: 15px;
  }

  .form-dark .md-form label {
    color: #fff;
  }

  .form-dark input[type='text']:focus:not([readonly]) {
    border-bottom: 1px solid #00c851;
    -webkit-box-shadow: 0 1px 0 0 #00c851;
    box-shadow: 0 1px 0 0 #00c851;
  }

  .form-dark input[type='text']:focus:not([readonly]) + label {
    color: #fff;
  }

  .form-dark input[type='password']:focus:not([readonly]) {
    border-bottom: 1px solid #00c851;
    -webkit-box-shadow: 0 1px 0 0 #00c851;
    box-shadow: 0 1px 0 0 #00c851;
  }

  .form-dark input[type='password']:focus:not([readonly]) + label {
    color: #fff;
  }

  .form-dark input[type='checkbox'] + label:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 17px;
    height: 17px;
    z-index: 0;
    border: 1.5px solid #fff;
    border-radius: 1px;
    margin-top: 2px;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }

  .form-dark input[type='checkbox']:checked + label:before {
    top: -4px;
    left: -3px;
    width: 12px;
    height: 22px;
    border-style: solid;
    border-width: 2px;
    border-color: transparent #00c851 #00c851 transparent;
    -webkit-transform: rotate(40deg);
    -ms-transform: rotate(40deg);
    transform: rotate(40deg);
    -webkit-backface-visibility: hidden;
    -webkit-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }

  .scrollbar-light-blue::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  .scrollbar-light-blue::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  .scrollbar-light-blue::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #82b1ff;
  }

  .scrollbar-light-blue {
    scrollbar-color: #82b1ff #f5f5f5;
  }

  .scrollbar-dusty-grass::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  .scrollbar-dusty-grass::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  .scrollbar-dusty-grass::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-image: -webkit-linear-gradient(330deg, #d4fc79 0%, #96e6a1 100%);
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  }

  .square::-webkit-scrollbar-track {
    border-radius: 0 !important;
  }

  .square::-webkit-scrollbar-thumb {
    border-radius: 0 !important;
  }

  .thin::-webkit-scrollbar {
    width: 6px;
  }

  body {
    display: grid;
    grid-template-rows: 1fr;
    font-family: 'Raleway', sans-serif;
    background-color: #01e37f;
  }

  h3 {
    font-size: 0.7em;
    letter-spacing: 1.2px;
    color: $color-secondary;
  }

  .card {
    border: 1px solid rgb(0, 0, 0);
  }
  .card-fora {
    min-height: 550px;
  }

  /* ----- Product Section ----- */
  .product {
    display: grid;
    grid-template-columns: 0.9fr 1fr;
    margin: auto;
    padding: 2.5em 0;
    min-width: 600px;
    background-color: #d0d0d0;
    border-radius: 5px;
    margin-left: 80px;
  }

  /* ----- Photo Section ----- */
  .product__photo {
    position: relative;
  }

  .photo-container {
    position: absolute;
    left: -2.5em;
    display: grid;
    grid-template-rows: 1fr;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
  }

  .photo-main {
    border-radius: 6px 6px 0 0;
    background-color: #9be010;
    background-image: url(${slide1});
    background-position: center;

    .controls {
      display: flex;
      justify-content: space-between;
      padding: 0.8em;
      color: #fff;

      i {
        cursor: pointer;
      }
    }

    img {
      position: absolute;
      left: -3.5em;
      top: 2em;
      max-width: 110%;
      filter: saturate(150%) contrast(120%) hue-rotate(10deg)
        drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
    }
  }

  .photo-album {
    padding: 0.7em 1em;
    border-radius: 0 0 6px 6px;
    background-color: #fff;

    ul {
      display: flex;
      justify-content: space-around;
    }

    li {
      float: left;
      width: 55px;
      height: 55px;
      padding: 7px;
      border: 1px solid $color-secondary;
      border-radius: 3px;
    }
  }

  /* ----- Informations Section ----- */
  .product__info {
    padding: 0.8em 0;
  }

  .title {
    h1 {
      margin-bottom: 0.1em;
      color: $color-primary;
      font-size: 1.5em;
      font-weight: 900;
    }

    span {
      font-size: 0.7em;
      color: $color-secondary;
    }
  }

  .price {
    margin: 1.5em 0;
    color: $color-highlight;
    font-size: 1.2em;

    span {
      padding-left: 0.15em;
      font-size: 2.9em;
    }
  }

  .description {
    clear: left;
    margin: 2em 0;

    h3 {
      margin-bottom: 1em;
    }

    ul {
      font-size: 0.8em;
      list-style: disc;
      margin-left: 1em;
    }

    li {
      text-indent: -0.6em;
      margin-bottom: 0.5em;
    }
  }

  .buy--btn {
    padding: 1.5em 3.1em;
    border: none;
    border-radius: 7px;
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 1.3px;
    color: #fff;
    background-color: $color-highlight;
    box-shadow: 2px 2px 25px -7px $color-primary;
    cursor: pointer;

    &:active {
      transform: scale(0.97);
    }
  }

  .stretch {
    margin-left: 10px;
    min-width: 100%;
    min-height: 100%;
  }

  /* ----- Footer Section ----- */
  footer {
    padding: 1em;
    text-align: center;
    color: #fff;

    a {
      color: $color-primary;

      &:hover {
        color: $color-highlight;
      }
    }
  }
`;
