import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Rating from '@material-ui/lab/Rating';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '50px',
  },

  textField: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
  },

  selector: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& .MuiInputBase-input:focus': {
      color: 'green',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <form noValidate autoComplete="off">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                className={classes.textField}
                label="Nome"
                variant="filled"
                color="#333"
              >
                <TextareaAutosize aria-label="minimum height" rowsMin={3} />
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} lg={7}>
              <TextField
                className={classes.textField}
                label="Endereco"
                variant="filled"
              />
            </Grid>
            <Grid item xs={6} sm={3} lg={2} className={classes.selector}>
              <FormControlLabel
                control={
                  <Switch
                    checked={state.gilad}
                    onChange={handleChange}
                    name="gilad"
                  />
                }
                label="Aprovado"
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={6} sm={3} lg={3} className={classes.selector}>
              <Rating
                name="customized-empty"
                defaultValue={2}
                precision={1}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
                size="large"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textField}
                id="filled-multiline-static"
                label="Descricao"
                multiline
                rows="8"
                variant="filled"
              />
            </Grid>
          </Grid>
        </div>
      </form>
    </>
  );
}
