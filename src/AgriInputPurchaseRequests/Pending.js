import React from "react";
import { Grid, Button, Box } from "@material-ui/core";

function Pending() {
  return (
    <Box m={2}>
      <Grid container justify="center">
        <Box m={2}>
          <Button variant="contained" size="large" color="secondary">
            Undo Batch
          </Button>
        </Box>
        <Box m={2}>
          <Button variant="contained" size="large" color="secondary">
            Assign Suppliers
          </Button>
        </Box>
        <Box m={2}>
          <Button variant="contained" size="large" disabled m={2}>
            Generate PO
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}

export default Pending;
