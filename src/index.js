/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import "assets/css/material-dashboard-react.css?v=1.8.0";

//importado do código antigo

import { isAuthenticated } from "./services/auth";
import SignIn from "./views/SignIn";
import preSignIn from "views/preSignIn";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />   
      <Route exact path="/" component={preSignIn} />
      <Route exact path="/singin" component={SignIn} />
    </Switch>
  </Router>,
  document.getElementById("root")
);



// <Redirect from="/" to="/admin/dashboard" />
 // <Route path="/customer" component={Customer} />

 /**ANTES DE BUGAR
   
  

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (

        isAdmin()?(
          <Component {...props} />
        ):(
          isProvider()?(

            <Component {...props} />

          ):(

            <Component {...props} />
            
          )            
          )
        )

        
       : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);




  
  */

 