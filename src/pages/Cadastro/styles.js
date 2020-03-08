import styled from 'styled-components';

export const Styles = styled.div`
  form {
    background: #ffffff;
    border-radius: 4px;
    border: 0.01rem solid #999999;
    padding: 30px;
    font-size: 15px;

    -webkit-box-shadow: 0px 0px 23px -12px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: 0px 0px 23px -12px rgba(0, 0, 0, 0.65);
    box-shadow: 0px 0px 23px -12px rgba(0, 0, 0, 0.65);

    h2 {
      text-align: center;
      padding-bottom: 30px;
    }

    .form-group {
      input,
      textarea {
        background: #f9f9f9;
      }

      input:focus,
      textarea:focus {
        border: 1px solid #6002ee;
        box-shadow: none;
        transition: 2s;
      }

      label {
        padding-left: 2px;
        margin-bottom: 0;

        .label-rating {
          padding-bottom: 10px;
        }
      }
    }

    .actions {
      margin-top: 30px;

      .btn-cancel {
        background: #ff0000;
        border: transparent;
        text-transform: uppercase;
        margin-left: 33px;
        font-size: 13px;
      }

      .btn-save {
        width: 300px;
        background: #008b00;
        border: transparent;
        text-transform: uppercase;
        margin-left: 620px;
        font-size: 13px;
      }
    }
  }
`;
