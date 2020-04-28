import React, {Component} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { styles }from "./styles"

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import api from "../../services/api";

//import { Link, withRouter } from "react-router-dom";

import { login } from "../../services/auth";
import { Form, Container } from "./styles";







export default class UserProfile extends Component {
  state = {
    username: "i",
    cnpj:"",
    phone_number:"",
    state: "",
    user_id: 2,
    error: ""
  };

  

  handleProvider= async e => {
    e.preventDefault();
    const { username, cnpj, phone_number, state, user_id } = this.state;
     // lembrar id do usuario atual
     console.log(username + cnpj + phone_number+state+user_id)
    if (!username || !cnpj || !phone_number|| !state || !user_id) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        await api.post("/createProvider", { username, cnpj, phone_number, state, user_id });
       
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com a criação do usuário, verifique suas credenciais."
        });
      }
    }
  };




  
  render(){
    return (
      <Container>
     
          <Form onSubmit={this.handleProvider}>
         
          {this.state.error && <p>{this.state.error}</p>}
          <header>Cadastro de Provedores</header>
          <input
            type="text"
            placeholder="Nome Provedor"
            onChange={e => this.setState({ username: e.target.value })}
          />

          <input
            type="text"
            placeholder="CNPJ"
            onChange={e => this.setState({ cnpj: e.target.value })}
          />

          <input
            type="text"
            placeholder="Telefone"
            onChange={e => this.setState({ phone_number: e.target.value })}
          />

          <input
            type="text"
            placeholder="status"
            onChange={e => this.setState({ state: e.target.value })}
          />
          
          <input
            type="text"
            placeholder="user_id"
            onChange={e => this.setState({ user_id: e.target.value })}
          />
          <button type="submit"  >Cadastrar</button>
          
          
          
        </Form>
  
      </Container>
  


        
    );
}
}



