import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import api from "../../services/api";
import { Form, Container } from "./styles";

class SingUpCustomer extends Component {
  state = {
    username: "",
    cpf:"",
    data:"",
    email: "",
    password: "",
    gender:"",
    error: ""
  };
  

  handleCustomer = async e => {
    e.preventDefault();
   //var gender = document.querySelector('input[name="gender"]:checked').value
    const { username, cpf, data, email, password, gender } = this.state;
  
    if (!username || !cpf || !data || !email || !password || !gender ) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/createCustomer", { username, cpf, data, email, password, gender  });
        this.setState({ error: "Sucesso" });
        
      } catch (err) {
        console.log(err);
        this.setState({ error: "Entrou no  catch linha 29 Class Provedor " });
      }
    }
  };

  render() {
    return (
      
      <Container>
        
          <Form onSubmit={this.handleCustomer}>
          
          {this.state.error && <p>{this.state.error}</p>}
          <header>Cadastro de Clientes</header>

          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ username: e.target.value })}
          />

          <input type="text"
            name="cpf" 	
            // pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
            title="Digite um CPF no formato: xxx.xxx.xxx-xx"
            placeholder="CPF"
            onChange={e => this.setState({ cpf: e.target.value })}

          />
         

          <input
            type="date"
            placeholder="Data de Nascimento"
            onChange={e => this.setState({ data: e.target.value })}
          />
          
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

          
          <span>
            <label>Sexo:</label>
            <input type="radio" name="gender"  value="male" 
                   onClick={e => this.setState({ gender: e.target.value })}
            /> Masculino
            <input type="radio" name="gender" value="female"
                   onClick={e => this.setState({ gender: e.target.value })}
            /> Femino
            <input type="radio" name="gender" value="other"
                   onClick={e => this.setState({ gender: e.target.value })}
            /> Outro
           </span>


          <button type="submit">Cadastrar</button>
          
       
        </Form>
        
      </Container>
      
    );
  }
}

export default withRouter(SingUpCustomer);
