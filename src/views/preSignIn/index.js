import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../assets/bold.png";
import Desafio from "../../assets/lamp.png";
import api from "../../services/api";
import { login, setPermission, EMAIL } from "../../services/auth";
import { Form, Container, TextContainer } from "./styles";
import preSignIn from "../preSignIn";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: "",

    // permission:"0",
  };

  handleSignIn = async (e) => {
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
            "Desculpe, não conseguimos acessar sua conta com essas credenciais. Tente novamente ou crie uma nova conta.",
        });
      }
    }
  };

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

        <TextContainer>
          <img src={Desafio} alt="desafio" />
          <h1>
            <strong>Inovando PEGN</strong>{" "}
          </h1>
          <l1>
            Venha e faça parte do projeto <strong>Inovando PEGN</strong>.
            Experimente no ambiente online as mesmas experiências de um evento
            presencial! Inscreva-se e venha garantir a melhor prática de
            inovação e desafios na internet.
          </l1>
        </TextContainer>
      </Container>
    );
  }
}

export default withRouter(SignIn);
