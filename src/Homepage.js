import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Grid } from "@material-ui/core";

function Home() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Link></Link>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          hello triel app
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          Dopes
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
