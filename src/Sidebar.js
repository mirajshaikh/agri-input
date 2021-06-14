import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { SidebarStyleData } from "./SidebarStyleData";
import Nav from "./Nav";
import AgriInputPurchaseRequests from "./AgriInputPurchaseRequests/AgriInputPurchaseRequests";

export default function PermanentDrawerLeft() {
  const classes = SidebarStyleData();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Agri input React project
            </Typography>
          </Toolbar>
        </AppBar>
        <Nav />
        <Switch>
          <Route path="/agri-input-master-maintenance">
            <div>
              <main>
                <div />
                <h2>Agri-Input Master Maintenance</h2>
              </main>
            </div>
          </Route>
          <Route path="/supplier-master-maintenance">
            <div>
              <main>
                <div />
                <h2>Supplier Master Maintenance</h2>
              </main>
            </div>
          </Route>
          <Route path="/agri-input-purchase-requests">
            <AgriInputPurchaseRequests />
          </Route>
          <Route path="/tax-master-maintenance">
            <div>
              <main>
                <div />
                <h2>Tax Master Maintenance</h2>
              </main>
            </div>
          </Route>
          <Route path="/">
            <div>
              <main>
                <div />
                <h2>Click on to the Agri-Input Purchase Requests </h2>
              </main>
            </div>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}
