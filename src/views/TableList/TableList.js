import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import Logococa from "../../assets/logococa.jpg";
import Logoepoca from "../../assets/logoepoca.png";
import Logo from "../../assets/logo2.png";
import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <img src={Logo}></img>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Desafio da semana</h4>
              <p className={classes.cardCategory}>
                Redução de custos. Esse é um item essencial para qualquer gestor
                de empresa. ...
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <img src={Logoepoca} width="250px" height="120px"></img>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Último Desafio da série... </h4>
              <p className={classes.cardCategory}>
                Gestão de processos: uma peça-chave.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 22 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <img src={Logococa} width="220px" height="120px"></img>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>
                A diferença entre uma empresa bem-sucedida e uma empresa
                malsucedida muitas vezes não está na qualidade do produto, mas
                sim em como ele é feito.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime />updated 44  minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

/*

import React, { Component } from "react";
import MaterialTable from "material-table";
import api from "../../services/api";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class TableList extends Component {
  state = {
    columns: [
      { title: "Nome", field: "username" },
      { title: "Email", field: "email" },

      { title: "permissão", field: "permission" },
    ],
    data: [],
    userUp: [],
    userDestroy: [],
    flag: -4, // -2 update // -3 delete
    error: 0,
  };

  componentDidMount = async (e) => {
    const response = await api.get("/listUser");
    console.log(response.data);
    this.setState({
      data: response.data,
    });
  };

  componentDidUpdate = async (e) => {
    switch (this.state.flag) {
      case -2:
        await api.put(`/updateUser/${this.state.userUp.id}`, this.state.userUp);
        console.log("Update");
        window.location.reload();
        break;
      case -3:
        await api.delete(`/deleteUser/${this.state.userDestroy}`);
        console.log("Delete");
        window.location.reload();
        break;
      default:
        console.log("Sorry, we are out of " + this.state.flag + ".");
        break;
    }
  };

  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

//const salve = async() =>{ await api.post("/updateUser/1",  this.state.data )};
//this.setState({ userUp: newdata  }, () => resolve());


*/
