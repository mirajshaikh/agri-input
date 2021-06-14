import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core/";
import Accordion from "./Accordion";
import {
  Box,
  Divider,
  Tab,
  Tabs,
  AppBar,
  Typography,
} from "@material-ui/core/";
import Pending from "./Pending";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    margin: "0 20px",
    marginTop: "100px",
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`${classes.root} backnone`}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            label={
              <React.Fragment>
                <span className={`number1 numbers`}>1</span>
                <span>PENDING</span>
              </React.Fragment>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <React.Fragment>
                <span className={`number2 numbers`}>2</span>
                <span>EXECUTING</span>
              </React.Fragment>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <React.Fragment>
                <span className={`number3 numbers`}>3</span>
                <span>EXECUTED</span>
              </React.Fragment>
            }
            {...a11yProps(2)}
          />
          <Tab
            label={
              <React.Fragment>
                <span className={`number4 numbers`}>4</span>
                <span>COMPLETED</span>
              </React.Fragment>
            }
            {...a11yProps(3)}
          />
        </Tabs>
        <Divider />
      </AppBar>
      <TabPanel value={value} index={0}>
        PENDING ORDER WILL DISPLAY HERE
        <Link onClick={() => setValue(1)} style={{ cursor: "pointer" }}>
          {" "}
          GO TO EXECUTING ORDERS
        </Link>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Pending />
        <Accordion />
      </TabPanel>
      <TabPanel value={value} index={2}>
        EXECUTED ORDER WILL DISPLAY HERE
      </TabPanel>
      <TabPanel value={value} index={3}>
        COMPLETED ORDER WILL DISPLAY HERE
      </TabPanel>
    </div>
  );
}
