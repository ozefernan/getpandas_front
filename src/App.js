import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Routes />;
      <GlobalStyle />
    </>
  );
}

export default App;
