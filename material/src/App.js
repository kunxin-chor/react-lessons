import React, { useState } from "react";
import logo from "./logo.svg";
import {
  Button,
  AppBar,
  Typography,
  Toolbar,
  Container,
  Paper,
  Grid
} from "@material-ui/core";
import CustomStyled from "./CustomStyled";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App(props) {
  const input = useState("");
   const classes = useStyles();
  return (
    <div>
      <Container maxWidth="md">
        <Paper elevation={3}>
          <AppBar color="primary" position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                My header
              </Typography>
            </Toolbar>
          </AppBar>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
          <CustomStyled></CustomStyled>
          <Grid container spacing={3} className={classes.root}> 
            <Grid item xs={12}>
              <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
