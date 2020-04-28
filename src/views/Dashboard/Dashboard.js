import React, { Component } from "react";
import Chart from "react-google-charts";
import { Form } from "./styles";
import api from "../../services/api";
import { Container } from "views/Dashboard/styles";
import CanvasVideo from "react-canvas-video";

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
      <Container>
        <CanvasVideo
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          options={{
            text: "This copy is registered for XXX!",
            poster:
              "https://images.pexels.com/photos/383557/pexels-photo-383557.jpeg?w=1260&h=750",
            autoplay: true,
          }}
          styles={{
            barContainer: {
              backgroundColor: "blue",
              width: "1px",
            },
          }}
        />
        <CanvasVideo
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          options={{
            text: "This copy is registered for XXX!",
            poster:
              "https://images.pexels.com/photos/383557/pexels-photo-383557.jpeg?w=1260&h=750",
            autoplay: true,
          }}
          styles={{
            barContainer: {
              backgroundColor: "blue",
              width: "1px",
            },
          }}
        />

        <CanvasVideo
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          options={{
            text: "This copy is registered for XXX!",
            poster:
              "https://images.pexels.com/photos/383557/pexels-photo-383557.jpeg?w=1260&h=750",
            autoplay: true,
          }}
          styles={{
            barContainer: {
              backgroundColor: "blue",
              width: "1px",
            },
          }}
        />

        <CanvasVideo
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          options={{
            text: "This copy is registered for XXX!",
            poster:
              "https://images.pexels.com/photos/383557/pexels-photo-383557.jpeg?w=1260&h=750",
            autoplay: true,
          }}
          styles={{
            barContainer: {
              backgroundColor: "blue",
              width: "1px",
            },
          }}
        />

        <CanvasVideo
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          options={{
            text: "This copy is registered for XXX!",
            poster:
              "https://images.pexels.com/photos/383557/pexels-photo-383557.jpeg?w=1260&h=750",
            autoplay: true,
          }}
          styles={{
            barContainer: {
              backgroundColor: "blue",
              width: "1px",
            },
          }}
        />

<CanvasVideo
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          options={{
            text: "This copy is registered for XXX!",
            poster:
              "https://images.pexels.com/photos/383557/pexels-photo-383557.jpeg?w=1260&h=750",
            autoplay: true,
          }}
          styles={{
            barContainer: {
              backgroundColor: "blue",
              width: "1px",
            },
          }}
        />

        <CanvasVideo
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          options={{
            text: "This copy is registered for XXX!",
            poster:
              "https://images.pexels.com/photos/383557/pexels-photo-383557.jpeg?w=1260&h=750",
            autoplay: true,
          }}
          styles={{
            barContainer: {
              backgroundColor: "blue",
              width: "1px",
            },
          }}
        />

        <CanvasVideo
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          options={{
            text: "This copy is registered for XXX!",
            poster:
              "https://images.pexels.com/photos/383557/pexels-photo-383557.jpeg?w=1260&h=750",
            autoplay: true,
          }}
          styles={{
            barContainer: {
              backgroundColor: "blue",
              width: "1px",
            },
          }}
        />
      </Container>
    );
  }
}
