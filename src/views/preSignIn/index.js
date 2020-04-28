import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../assets/bold.png";
import api from "../../services/api";
import { login } from "../../services/auth";
import { Form, Container } from "./styles";
import SingIn from "../SignIn/index";


class SignIn extends Component {
  

  render() {
    return (
      <Container>
         <Form>
          <img src={Logo} alt="bold logo" />
          
            <header>Não é cadastrado?</header>
            
            <p>Solicite seu cadastro:</p>
            <Link to="*">Clique Aqui</Link>
            <p>Já é cadastrado?</p>
          <Link to="SingIn">Clique Aqui</Link>
          </Form>

      </Container>
    );
  }
}

export default withRouter(SignIn);
