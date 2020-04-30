import React, { Component } from "react";
import Chart from "react-google-charts";
import { Form } from "./styles";
import api from "../../services/api";
import { Container, ContainerPrimario, Canvas } from "views/Dashboard/styles";

import YouTube from "@u-wave/react-youtube";

var permission = 0;

export default class Dashboard extends Component {
  //const response = await api.get("/contUser");
  //console.log(response);

  state = {
    ativo1: "",
    inativo1: "",
    ativo2: 112,
    inativo2: 12,
    error: "",
  };

  componentDidMount = async (e) => {
    const valor = await api.get("/countProvider");

    this.setState({ ativo1: valor.data[0] });
    this.setState({ inativo1: valor.data[1] });

    const valor2 = await api.get("/countClientes");

    this.setState({ ativo2: valor2.data[0] });
    this.setState({ inativo2: valor2.data[1] });
  };

  /*
    componentDidUpdate = async e => {
      const data = localStorage.getItem('email')
       var object = {}
       object.email = data

      permission = await api.post("/permissionUser", object)
      //console.log(per.data)
    }
          
  
 */

  render() {
    return (
      <div>
        <ContainerPrimario>
          <div>
            <YouTube video="LKnlv97Uzn8" width="500px" height="300px" />
          </div>
        </ContainerPrimario>

        <Container>
          <div>
            <YouTube video="LKnlv97Uzn8" width="230px" height="140px" />
          </div>
          <div>
            <YouTube video="LKnlv97Uzn8" width="230px" height="140px" />
          </div>
          <div>
            <YouTube video="LKnlv97Uzn8" width="230px" height="140px" />
          </div>
          <div>
            <YouTube video="LKnlv97Uzn8" width="230px" height="140px" />
          </div>
          <div>
            <YouTube video="LKnlv97Uzn8" width="230px" height="140px" />
          </div>
          <div>
            <YouTube video="LKnlv97Uzn8" width="230px" height="140px" />
          </div>
          <div>
            <YouTube video="LKnlv97Uzn8" width="230px" height="140px" />
          </div>
          <div>
            <YouTube video="LKnlv97Uzn8" width="230px" height="140px" />
          </div>
          <div>
            <YouTube video="LKnlv97Uzn8" width="230px" height="140px" />
          </div>
          <div>
            <YouTube video="LKnlv97Uzn8" width="230px" height="140px" />
          </div>
          <div>
            <YouTube video="LKnlv97Uzn8" width="230px" height="140px" />
          </div>
          <div>
            <YouTube video="LKnlv97Uzn8" width="230px" height="140px" />
          </div>
          <div>
            <YouTube video="LKnlv97Uzn8" width="230px" height="140px" />
          </div>
          <div>
            <YouTube video="LKnlv97Uzn8" width="230px" height="140px" />
          </div>
          <div>
            <YouTube video="LKnlv97Uzn8" width="230px" height="140px" />
          </div>
          <div>
            <YouTube video="LKnlv97Uzn8" width="230px" height="140px" />
          </div>
        </Container>
      </div>
    );
  }
}
