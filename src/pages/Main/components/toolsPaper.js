import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import Form from './form';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '15px',
  },

  form: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    padding: '2px 4px 2px 10px',
    alignItems: 'center',
    justifyContent: 'center',
    width: 800,

    marginRight: '15px',
    borderRadius: '5px',
  },

  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },

  iconButton: {
    padding: 10,
    boxShadow: 'none',
    outline: 'none !important',
    color: '#999',
  },

  buttonFav: {
    background: '#ee6002',
    width: '130px',
    height: '48px',
    color: '#fff',
    fontSize: '13px',
    fontWeight: 'bold',
    marginRight: '15px',

    boxShadow: 'none',
    outline: 'none !important',

    '&:hover': {
      background: '#e54304',
    },
  },

  buttonAdd: {
    background: '#dd0074',
    width: '150px',
    height: '48px',
    color: '#fff',
    fontSize: '13px',
    fontWeight: 'bold',

    boxShadow: 'none',
    outline: 'none !important',

    '&:hover': {
      background: '#b1006a',
      transition: '1s',
    },
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paper: {
    backgroundColor: '#eee',
    border: '1px solid #555',
    boxShadow: theme.shadows[5],
    outline: 'none !important',
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Paper component="form" className={classes.form}>
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <InputBase className={classes.input} />
      </Paper>
      <Button
        variant="contained"
        className={classes.buttonFav}
        startIcon={<FavoriteBorder fontSizeLarge />}
      >
        Favoritos
      </Button>

      <Button
        variant="contained"
        type="button"
        className={classes.buttonAdd}
        startIcon={<AddIcon fontSizeLarge />}
        onClick={handleOpen}
      >
        Adicionar
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Form />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
