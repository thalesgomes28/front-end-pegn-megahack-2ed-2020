import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";
import { login, logout } from "../../services/auth";
import TableProvider from "../TableProvider/TableProvider";

import { Form, Container } from "./styles";
//import user_id from .....//buscar o numero do usuario

class CadastrarProvedor extends Component {
  state = {
    username: "",
    cnpj: "",
    phone_number: "",
    state: "",

    error: "",
  };

  handleProvider = async (e) => {
    e.preventDefault();

    var object = {};
    object.email = localStorage.getItem("email");
    var params = await api.get(`/userID/${object.email}`);

    var { username, cnpj, phone_number, state } = this.state;
    // lembrar id do usuario atual

    var user_id = params.data;
    console.log(username + cnpj + phone_number + state + user_id);
    if (!username || !cnpj || !phone_number || !state || !user_id) {
      this.setState({ error: "Dados não foram salvos no banco!" });
    } else {
      try {
        await api.post("/createProvider", {
          username,
          cnpj,
          phone_number,
          state,
          user_id,
        });
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com a criação do usuário, verifique suas credenciais.",
        });
      }
    }
  };

  render() {
    return (
      <div class="wrapper">
        <Container>
          <Form onSubmit={this.handleProvider}>
            {this.state.error && <p>{this.state.error}</p>}
            <header>Cadastro </header>
            <input
              type="text"
              placeholder="Nome Provedor"
              onChange={(e) => this.setState({ username: e.target.value })}
            />

            <input
              type="text"
              placeholder="CNPJ"
              onChange={(e) => this.setState({ cnpj: e.target.value })}
            />

            <input
              type="text"
              placeholder="Telefone"
              onChange={(e) => this.setState({ phone_number: e.target.value })}
            />

            <input
              type="text"
              placeholder="status"
              onChange={(e) => this.setState({ state: e.target.value })}
            />

            <button type="submit">Cadastrar  </button>
          </Form>
        </Container>

        <Container>
          <TableProvider />
        </Container>
      </div>
    );
  }
}

export default withRouter(CadastrarProvedor);
