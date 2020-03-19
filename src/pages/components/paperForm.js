import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'sticky',
    top: '0',
    zIndex: '2',
  },

  btn: {
    boxShadow: 'none',
    outline: 'none !important',
    width: '100%',
    height: '60px',
    fontFamily: 'Roboto',
    borderRadius: '0',
    backgroundColor: '#7e3ff2',
    color: '#ffffff',
    transition: '1s',

    '&:hover': {
      backgroundColor: '#5300e9',
      transition: '1s',
    },
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.listPaper}>
        <Button className={classes.btn} variant="">
          SALVAR
        </Button>
      </Paper>
    </div>
  );
}
