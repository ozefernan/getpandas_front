import React, { Component } from 'react';

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

import { Styles } from './styles';

export default class Card extends Component {
  deleteCard = () => {
    api
      .post('pontoturistico/', { nome, descricao, endereco })
      .then(response => {
        toast.success('Ponto turistico adicionado', {
          position: 'top-center ',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
  };

  render() {
    const { register } = props;
    console.log(register)
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <Styles>
        <Card className="cards">
          <CardMedia className="media" image={teste} title="Paella dish">
            <Fab
              size="medium"
              className="editIcon"
              aria-label="edit"
              style={{ position: 'relative', bottom: '297px', left: '325px' }}
            >
              <Link to="/cadastro" className="link">
                <EditIcon />
              </Link>
            </Fab>
          </CardMedia>
          <CardContent>
            <Typography
              className="title"
              gutterBottom
              variant="h5"
              component="h2"
            >
              {register.nome}
            </Typography>

            <Typography className="pos" color="textSecondary">
              Descricao
          </Typography>

            <Typography
              variant="body2"
              component="p"
              align="center"
              classKey="button"
            >
              {register.descricao}
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <Tooltip title="Adicionar aos favoritos">
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton aria-label="delete" type="button" onClick={handleOpen}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className="modal"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className="paper">
                  <h2 id="transition-modal-title">
                    Excluir?
                  </h2>
                  <Button
                    className="btn"
                    variant="contained"
                    color="primary"
                    onClick={handleClose}
                  >
                    Confirmar
                </Button>
                  <Button
                    className="btn"
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
              className="buttonAtractions"
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
              className="stars"
            >
              <Rating name="read-only" value={4} readOnly />
            </Box>
          </CardActions>
        </Card>
      </Styles>
    );
  }
}
