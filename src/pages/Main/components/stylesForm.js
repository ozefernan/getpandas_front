import styled from 'styled-components';

export const Styles = styled.div`
  .form {
    flex-grow: 1;
    margin: 10px;
  }

  .textField {
    color: #333;
    width: 100%;
  }

  .input {
    height: 50px;
    padding: 10px;
    color: #000;
    background-color: #ffffff;
    font-size: 15px;
    width: 100%;
    border: 1px solid #bdbdbd;
    border-radius: 5px;
    text-decoration: none;
    &::placeholder {
      color: #999999;
    }
  }

  .input:focus {
    outline: none !important;
    border: 1px solid #4a26fd;
    background-color: #f9f9f9;
    box-shadow: none;
    transition: 3s;
  }

  .selector {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .submitButton {
    box-shadow: none;
    outline: none !important;

    width: 100%;
    height: 60px;
    font-family: Roboto;
    border-radius: 5px;
    background-color: #4a26fd;
    color: #ffffff;
    transition: 1s;

    &:hover {
      background-color: #3722f6;
      transition: 1s;
    }
  }
`;
