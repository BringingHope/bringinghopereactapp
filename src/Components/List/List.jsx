import React from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function List() {
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

export default List;
