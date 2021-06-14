import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  Divider,
  Box,
  Avatar,
  Grid,
  IconButton,
} from "@material-ui/core";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PendingTable from "./PendingTable";
import GetAppIcon from "@material-ui/icons/GetApp";
import HandelDownload from "./HandelDownload";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Grid container direction="row" alignItems="center">
            <Typography component={'span'}>AGBuy_598007800_1442</Typography>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </Grid>
            <Grid item>
              <Box m={1}>
                <Typography ><b>Alex Lee</b></Typography>
                <Typography component={'span'}>Mon, 13 Apr, 10:30am</Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <Avatar
                variant="square"
                alt="Remy Sharp"
                src="./imgs/msExcel.png"
                className={classes.large}
              />
            </Grid>
            <Grid item>
              <Box m={1}>
                <Typography component={'span'}>RFOList_132579_1442</Typography>
              </Box>
            </Grid>
            <Grid item>
              <IconButton
                onClick={(event) => {
                  event.stopPropagation();
                  HandelDownload("RFOList_1325790097_1442", "./extras/excel.xlsx");
                }}
              >
                <GetAppIcon />
              </IconButton>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <PendingTable />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Grid container direction="row" alignItems="center">
            <Typography component={'span'}>AGBuy_468476_1443</Typography>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/2.jpg"
                className={classes.large}
              />
            </Grid>
            <Grid item>
              <Box m={1}>
                <Typography component={'span'}><b>John Lee</b></Typography>
                <Typography component={'span'}>Tue, 14 Apr, 11:36am</Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <Avatar
                variant="square"
                alt="Remy Sharp"
                src="./imgs/msExcel.png"
                className={classes.large}
              />
            </Grid>
            <Grid item>
              <Box m={1}>
                <Typography>RFOList_67468_1443</Typography>
              </Box>
            </Grid>
            <Grid item>
              <IconButton
                onClick={(event) => {
                  event.stopPropagation();
                  HandelDownload("RFOList_1325790097_1443", "./extras/excel.xlsx");
                }}
              >
                <GetAppIcon />
              </IconButton>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <PendingTable />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
