import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
/* Icons */
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { toast } from 'react-toastify';

import Form from '../Main/components/form'

import teste from '../../shared/images/slide3.jpg';
import api from '../../shared/api';

const useStyles = makeStyles(theme => ({
  cards: {
    maxWidth: 380,
    margin: 15,
  },

  media: {
    height: 0,
    paddingTop: '80.25%',
  },

  leftButton: {
    marginLeft: 'auto',
  },

  stars: {
    marginLeft: '0',
    marginBottom: '0',
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },

  expandOpen: {
    transform: 'rotate(180deg)',
  },

  avatar: {
    backgroundColor: red[500],
  },

  paperData: {
    width: '100%',
    height: '50px',
  },

  editIcon: {
    backgroundColor: '#3c8500',
    color: '#ffffff',
    boxShadow: 'none',
    outline: 'none !important',

    '&:hover': {
      backgroundColor: '#046400',
    },
  },

  title: {
    marginBottom: 0,
  },

  pos: {
    marginBottom: 12,
    margiTop: 0,

  },

  buttonAtractions: {
    width: '35%',
    marginRight: '10px',
    boxShadow: 'none',
    outline: 'none !important',
  },
  /* MODAL */
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#eee',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  descr: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: '16px',
    maxHeight: '32px',
  },

  btn: {
    margin: '10px 20px 0',
  },

  link: {
    textDecoration: 'none',
    color: '#ffffff',

    '&:hover': {
      color: '#ffffff',
    },
  },

  noShadow: {
    boxShadow: 'none',
    outline: 'none !important'
  }
}));

export default function RecipeReviewCard(props) {
  const { register } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  // const deleteCard = id => {
  //   api.delete(`pontoturistico/${id}`)
  //     .then(response => {
  //       console.log(response)
  //     })
  // };

  return (
    <>
      <Card className={classes.cards}>
        <CardMedia className={classes.media} image={teste} title="Paella dish">

          <Fab
            size="medium"
            className={classes.editIcon}
            aria-label="edit"
            style={{ position: 'relative', top: '10px', left: '310px' }}
          >
            <EditIcon onClick={handleOpen2} />
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open2}
              onClose={handleClose2}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open2}>
                <div className={classes.paper}>
                  <Form alter register={register} />
                </div>
              </Fade>
            </Modal>
          </Fab>
        </CardMedia>
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {register.nome}
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            Descricao
          </Typography>

          <Typography
            className={classes.descr}
            variant="body2"
            component="p"
            align="center"
            classKey="button"
          >
            {register.descricao}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <Tooltip className={classes.noShadow} title="Adicionar aos favoritos" >
            <IconButton aria-label="add to favorites" >
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton className={classes.noShadow} aria-label="delete" type="button" onClick={handleOpen}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
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
                <h2 className={classes.h2} id="transition-modal-title">
                  Excluir?
                </h2>
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                  onClick={e => {
                    api.delete(`pontoturistico/${register.id}`)
                      .then(response => {
                        toast.success('🚀 Ponto Turistico deletado', {
                          position: 'top-center',
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          autoClose: 3000
                        });
                        setTimeout(() => {
                          window.location.reload();
                        }, 3000);
                      })
                  }}
                >
                  Confirmar
                </Button>
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="secondary"
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
              </div>
            </Fade>
          </Modal>

          <Button
            className={classes.buttonAtractions}
            variant="outlined"
            size="medium"
            color="secondary"
          >
            {register.atracoes.length} Atracoes
          </Button>

          <Box
            component="fieldset"
            mb={3}
            borderColor="transparent"
            className={classes.stars}
          >
            <Rating name="read-only" value={4} readOnly />
          </Box>
        </CardActions>
      </Card>
    </>
  );
}
