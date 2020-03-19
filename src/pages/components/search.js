import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
/* Icons */
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px 2px 15px',
    display: 'flex',
    alignItems: 'center',
    width: 600,
    marginTop: '30px',
    borderRadius: '30px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    boxShadow: 'none',
    outline: 'none !important',
    backgroundColor: '#310199',
    color: '#ffffff',
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Salvador, Bahia"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
