// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link } from "react-router-dom";

import { SidebarLinkData } from "./SidebarLinkData";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { SidebarStyleData } from "./SidebarStyleData";
import { Typography } from "@material-ui/core";

function Nav() {
  const classes = SidebarStyleData();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="h6"> Agri Purchase Management</Typography>
          </ListItemText>
        </ListItem>
        <Divider />
        
        {SidebarLinkData.map((item, index) => (
          <Link style={{ textDecoration: "none" }} key={index} to={item.path}>
            <ListItem button key={index}>
              <ListItemText primary={item.title} />
            </ListItem>
            <Divider />
          </Link>
        ))}
        <Link style={{ textDecoration: "none", position:'absolute', bottom: 'calc(100vh - 140vh)'}} to="/tax-master-maintenance">
        <Divider />
        <ListItem>
          <ListItemText>
            <Typography > Tax Master Maintenance</Typography>
          </ListItemText>
        </ListItem>
        <Divider />
        </Link>
        
      </List>
    </Drawer>
  );
}

export default Nav;
