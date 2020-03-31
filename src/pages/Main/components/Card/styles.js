import styled from 'styled-components';

export const Styles = styled.div`
  max-width: 380px;
  margin: 15px;

.media {
  height: 0;
  padding-top: 80.25%;
}

.leftButton {
  margin-left: auto;
}

.stars {
  margin-left: 0;
  margin-bottom: 0;
}

.expand {
  margin-left: auto;
  transform: rotate(0deg);
}

.expandOpen {
  transform: rotate(180deg);
}

.avatar {
  background-color: #7159c4,
}

.paperData {
  width: 100%;
  height: 50px;
}

.editIcon {
  background-color: #3c8500;
  color: #ffffff;

  &:hover {
    background-color: '#046400',
  }
}

.title {
  margin-bottom: 0;
};

.pos {
  margin-bottom: 12px
  margin-top: 0px;
}

.buttonAtractions {
  width: 35%;
  margin-right: 10px;
}
/* MODAL */
.modal {
  display: flex;
  align-items: center;
  justify-content: 'center',
}

.paper {
  background-color: #333;
  border: 2px solid #000;
  /* box-shadow: theme.shadows[5], */
  padding: 5px;

  .h2 {
  text-align: center,
  }

  .btn {
    margin: 10px 20px 0,
  }
}

.link {
  text-decoration: none;
  color: #ffffff;

  &:hover {
    color: #ffffff;
  }
}
`;

