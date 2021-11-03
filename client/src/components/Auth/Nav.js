import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  authNav: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    padding: "2rem",
    top: 0,
    right: 0,
    "@media (max-width:599px)": {
      justifyContent: "center",
    },
  },
  createAccountButton: {
    border: "none",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      border: "none",
    },
  },
}));

const Nav = ({ history, route, headerText, buttonText }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.authNav}>
      <Typography variant="h3">{headerText}</Typography>
      <Button
        className={classes.createAccountButton}
        variant="outlined"
        onClick={() => history.push(route)}
        color="primary"
      >
        <Typography variant="button">{buttonText}</Typography>
      </Button>
    </Grid>
  );
};

export default Nav;
