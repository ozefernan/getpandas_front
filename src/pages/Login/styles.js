import styled from 'styled-components';

import slide1 from '../../shared/images/slide1.jpg';
import slide2 from '../../shared/images/slide2.jpg';
import slide3 from '../../shared/images/slide3.jpg';
import slide4 from '../../shared/images/slide4.jpg';

export const Styles = styled.div`
  .toastLogin {
    background: #7159c1;
  }

  .s-login {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }

  .page-left {
    display: flex;
    flex: 2;
    background: #3c3c3c;

    .wrapper {
      position: relative;
      height: 100vh;
      width: 100%;
      overflow: hidden;
    }

    .slideshow {
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translateX(-50%);

      &--hero {
        z-index: 3;
        left: 0;
        top: 50%;
        width: 100%;
        height: 80%;
        transform: translateY(-50%) skewY(-10deg);
        transform-origin: center;
        overflow: hidden;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);

        .slides {
          position: absolute;
          left: 0;
          top: -10%;
          width: 100vh;
          height: 100vh;
          animation: 11s slideshow-hero-mobile -3s infinite;
        }

        .slide1 {
          background-image: url(${slide1});
          animation: 20s slides-set-1 -0.1s infinite;
        }
        .slide2 {
          background-image: url(${slide2});
          animation: 20s slides-set-2 -0.1s infinite;
        }
        .slide3 {
          background-image: url(${slide3});
          animation: 20s slides-set-3 -0.1s infinite;
        }
        .slide4 {
          background-image: url(${slide4});
          animation: 20s slides-set-3 -0.1s infinite;
        }

        @media (min-width: 600px) {
          left: 50%;
          top: 0;
          width: 67%;
          height: 100%;
          transform: translateX(-50%) skewX(-10deg);

          .slides {
            top: 0;
            left: -25%;
            height: 100%;
            animation: 11s slideshow-hero -3s infinite;
          }
        }
      }

      &--contrast {
        z-index: 1;
        width: 100%;
        height: 50%;
        transform: none;

        .slide {
          // filter: blur(3px);
        }

        &--before {
          left: 0;

          .slides {
            width: 100vw;
          }
        }

        &--after {
          z-index: 2;
          left: auto;
          right: 0;

          .slides {
            width: 100vw;
            left: auto;
            right: 0;
          }
        }

        .slides {
          animation: 14s slideshow-contrast -5s infinite;
        }

        .slide1 {
          background-image: linear-gradient(
              to bottom,
              rgba(200, 200, 75, 0.25) 0,
              rgba(200, 75, 75, 0.5) 100%
            ),
            url(${slide1});
          // background-image: url(${slide1});
          animation: 20s slides-set-1 -0.2s infinite;
        }
        .slide2 {
          background-image: linear-gradient(
              to bottom,
              rgba(200, 200, 75, 0.25) 0,
              rgba(200, 75, 75, 0.5) 100%
            ),
            url(${slide2});
          // background-image: url(${slide2});
          animation: 20s slides-set-2 -0.2s infinite;
        }
        .slide3 {
          background-image: linear-gradient(
              to bottom,
              rgba(200, 200, 75, 0.25) 0,
              rgba(200, 75, 75, 0.5) 100%
            ),
            url(${slide3});
          // background-image: url(${slide3});
          animation: 20s slides-set-3 -0.2s infinite;
        }
        .slide4 {
          background-image: linear-gradient(
              to bottom,
              rgba(200, 200, 75, 0.25) 0,
              rgba(200, 75, 75, 0.5) 100%
            ),
            url(${slide4});
          // background-image: url(${slide4});
          animation: 20s slides-set-3 -0.2s infinite;
        }

        &--after {
          top: auto;
          bottom: 0;

          .slides {
            animation: 13s slideshow-contrast -13s infinite;
          }
          .slide {
            background-position: right;
          }
          .slide1 {
            animation: 20s slides-set-1 infinite;
          }
          .slide2 {
            animation: 20s slides-set-2 infinite;
          }
          .slide3 {
            animation: 20s slides-set-3 infinite;
          }
        }

        @media (min-width: 600px) {
          width: 50%;
          height: 100%;

          &--after {
            top: 0;
            bottom: auto;

            .slides {
              width: 50vw;
            }
          }
        }
      }
    }

    .slides,
    .slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    @keyframes slideshow-hero-mobile {
      0% {
        transform: scale(1) skewY(10deg);
      }
      50% {
        transform: scale(1.05) skewY(10deg);
      }
      100% {
        transform: scale(1) skewY(10deg);
      }
    }

    @keyframes slideshow-hero {
      0% {
        transform: scale(1) skewX(10deg);
      }
      50% {
        transform: scale(1.05) skewX(10deg);
      }
      100% {
        transform: scale(1) skewX(10deg);
      }
    }

    @keyframes slideshow-contrast {
      0% {
        transform: scale(1.05);
      }
      50% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.05);
      }
    }

    @keyframes slides-set-1 {
      0% {
        opacity: 1;
        // transform: translateY(0);
        transform: scale(1);
      }
      31% {
        opacity: 1;
        // transform: translateY(0);
        transform: scale(1);
      }
      34% {
        opacity: 0;
        // transform: translateY(100px);
        transform: scale(1.05);
      }
      97% {
        opacity: 0;
        // transform: translateY(-100px);
        transform: scale(1.05);
      }
      100% {
        opacity: 1;
        // transform: translateY(0);
        transform: scale(1);
      }
    }
    @keyframes slides-set-2 {
      0% {
        opacity: 0;
        // transform: translateY(-100px);
        transform: scale(1.05);
      }
      31% {
        opacity: 0;
        // transform: translateY(-100px);
        transform: scale(1.05);
      }
      34% {
        opacity: 1;
        // transform: translateY(0);
        transform: scale(1);
      }
      64% {
        opacity: 1;
        // transform: translateY(0);
        transform: scale(1);
      }
      67% {
        opacity: 0;
        // transform: translateY(100px);
        transform: scale(1.05);
      }
      100% {
        opacity: 0;
        // transform: translateY(100px);
        transform: scale(1.05);
      }
    }
    @keyframes slides-set-3 {
      0% {
        opacity: 0;
        // transform: translateY(-100px);
        transform: scale(1.05);
      }
      64% {
        opacity: 0;
        // transform: translateY(-100px);
        transform: scale(1.05);
      }
      67% {
        opacity: 1;
        // transform: translateY(0);
        transform: scale(1);
      }
      97% {
        opacity: 1;
        // transform: translateY(0);
        transform: scale(1);
      }
      100% {
        opacity: 0;
        // transform: translateY(100px);
        transform: scale(1.05);
      }
    }

    @media (max-width: 1280px) {
      display: none;
    }
  }

  .page-right {
    width: 500px;
    min-height: 100vh;

    background: #ffffff;

    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
      min-height: 100vh;
    }

    @keyframes slideIn {
      0% {
        transform: translateX(500px) scale(.2);
      }
      100% {
        transform: translateX(0px) scale(1);
      }
    }

    @keyframes slideUp {
      0% {
        transform: translateY(300px);
      }
      100% {
        transform: translateY(0px);
      }
    }

    @keyframes expand {
      0% {
        transform: translateX(0px);
      }
      100% {
        transform: translateX(1800px);
      }
    }

    /* LOGO IMG */
    .imag {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      img {
        width: 300px;
        margin: 10px;
        padding-top: 30px;
        padding-bottom: 2px;
      }
    }

    /* INPUT */
    .form-group {
      width: 400px;
      background: transparent;
      padding: 15px 15px 15px 15px;
      margin-top: 40px;

      display: flex;
      flex-direction: column;

      .form-control {
        padding: 10px;
        margin-bottom: 20px;
      }

      input {
        height: 50px;
        margin-top: 20px;
        padding: 22px 20px;
        color: #000;
        background-color: #ffffff;
        font-size: 15px;
        width: 100%;
        border: 1px solid #bdbdbd;
        border-radius: 2px;
        text-decoration: none;
        &::placeholder {
          color: #999999;
        }
      }

      input:focus {
        outline: none !important;
        border: 1px solid #6002ee;
        background-color: #f9f9f9;
        box-shadow: none;
        transition: 3s;
      }

      span {
        color: #FF0000;
        padding-top: 5px;
        text-align: center;
        text-transform: uppercase;
        font-size: 12px;
      }
    }



    /* Funções */
    .functions {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .button {
        color: #fff;
        text-transform: uppercase;
        font-size: 13px;
        height: 45px;
        width: 370px;
        margin-bottom: 10px;
        border: 0;
        border-radius: 5px;
        -webkit-transition-duration: 0.4s;
        transition-duration: 0.4s;
        background: #4102c1;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2),
          0 5px 20px 0 rgba(0, 0, 0, 0.19);
      }

      .button:hover {
        background: #5a21a5;
      }

      .forgot {
        font-size: 12px;
        color: #333333;
        text-decoration: none;

        transition-duration: 0.7s;
      }

      .bar-ou {
        display: flex;
        flex-direction: row;
        align-content: space-between;
        align-items: center;

        hr {
          margin: 10px 15px;
          border: none;
          border-bottom: 1px solid #cdcdcd;
          width: 130px;
        }
      }

      .singup {
        font-size: 11px;
        color: #333333;
        text-decoration: none;
        padding-bottom: 10px;
        height: 30px;
        width: 120px;
        text-transform: uppercase;

        transition-duration: 0.7s;
      }

      .singup:focus {
        outline: none !important;
        box-shadow: none;
      }
    }

    .footer {
      font-size: 12px;
      margin-bottom: 20px;
      text-align: center;
      max-width: 80%;

      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }

  .overlay1 {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 4;
    background-color: #333333;

    animation: expand 1.5s ease-in-out forwards;
  }

  .overlay2 {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 3;
    background-color: #5a21a5;

    animation: expand 1.7s ease-in-out forwards;
  }
`;
