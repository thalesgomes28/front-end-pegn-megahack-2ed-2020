import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../assets/bold.png";
import Desafio from "../../assets/desafio.jpg";
import api from "../../services/api";
import { login, setPermission, EMAIL } from "../../services/auth";
import { Form, Container, TextContainer } from "./styles";

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
        <Form onSubmit={this.handleSignIn}>
          <img src={Logo} alt="bold logo" />

          <l1>Acesse sua conta</l1>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => this.setState({ password: e.target.value })}
          />

          <button type="submit">Entrar</button>
        </Form>

        <TextContainer>
          <img src={Desafio} alt="desafio" />
          <h1> Desafios</h1>
          <l1>
            Eventos Online para grandes negócios Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown prin
          </l1>
        </TextContainer>
      </Container>
    );
  }
}

export default withRouter(SignIn);
