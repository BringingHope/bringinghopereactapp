import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
export default class List extends Component {
  render() {
    return (
      <Grid container>
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          m={2}
          p={2}
          style={{ width: "10rem", height: "12rem" }}
        >
          boxShadow={6}
        </Box>
      </Grid>
    );
  }
}
