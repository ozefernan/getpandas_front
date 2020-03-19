import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import AddBoxIcon from '@material-ui/icons/AddBox';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'sticky',
    top: '0',
    zIndex: '9999',
  },

  listPaper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  buttonCustom: {
    boxShadow: 'none',
    outline: 'none !important',
    width: '100%',
    height: '60px',
    fontFamily: 'Roboto',

    flexDirection: 'column',
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.listPaper}>
        <Divider orientation="vertical" flexItem />
        <Button className={classes.buttonCustom} variant="contained">
          Pontos Turisticos
        </Button>
        <Divider orientation="vertical" flexItem />
        <Button className={classes.buttonCustom} disabled variant="contained">
          Atracoes Diversas
        </Button>
      </Paper>
    </div>
  );
}
