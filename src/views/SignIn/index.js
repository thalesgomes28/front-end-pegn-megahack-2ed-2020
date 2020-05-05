

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import {Button} from './styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from "../../assets/bold.png";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://revistapegn.globo.com/">
        Inovando PEGN
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <img src={Logo} alt="bold logo" />
        <Typography component="h1" variant="h5">
          Entrar
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de e-mail"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Manter logado"
          />
      
          <Button 
          type="submit">
            <Link color="inherit" href="/admin"> Entrar</Link>
          
          </Button>

         
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu sua senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Não tem uma conta? Cadastre-se"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

/*
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../assets/bold.png";
import api from "../../services/api";
import { login, setPermission, EMAIL } from "../../services/auth";
import { Form, Container } from "./styles";



class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    
   // permission:"0",
  }; 


 

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });

    } else {
      try {
        const response = await api.post("/loginUser", { email, password });
        login(response.data.token, this.state.email);

        

        
        //console.log("permissao local" + per)
         this.props.history.push("/Admin");
    
      } catch (err) {
        this.setState({
          error:
            "Desculpe, não conseguimos acessar sua conta com essas credenciais. Tente novamente ou crie uma nova conta."
        });
      }
    }
  };

  render() {
    return (
      <Container>
          <Form onSubmit={this.handleSignIn}>
          <img src={Logo} alt="bold logo" />

          <l1>Acesse sua conta</l1>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          
          <button type="submit">Entrar</button>

         </Form>
      </Container>
    );
  }
}
 

export default withRouter(SignIn);
*/