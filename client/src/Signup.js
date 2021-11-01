import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
  CardMedia,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import { makeStyles } from "@material-ui/core/styles";
import sideBackground from "./assets/images/bg-img.png";
import bubbleImage from "./assets/images/bubble.svg";

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
  sideBackground: {
    width: "100%",
    maxheight: "auto",
    minHeight: "100vh",
  },
  overlayFrame: {
    position: "relative",
    "@media (max-width:599px)": {
      display: "none",
    },
  },
  overlayBackground: {
    backgroundColor: "#86B9FF",
    backgroundImage: "linear-gradient(to bottom, #3A8DFF, #86B9FF)",
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    textAlign: "center",
    opacity: "85%",
    display: "grid",
    alignItems: "center",
  },
  authFormContainer: {
    display: "flex",
    justifyContent: "center",
  },
  authForm: {
    width: "60%",
    marginTop: "5%",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container justify="center">
      <Grid className={classes.overlayFrame} sm={3} md={4}>
        <CardMedia
          className={classes.sideBackground}
          component="img"
          image={sideBackground}
          alt="side-img"
        />
        <Box className={classes.overlayBackground}>
          <Grid>
            <Box
              src={bubbleImage}
              alt="text-bubble"
              component="img"
              sx={{ marginBottom: "8%", width: "15%", height: "15%" }}
            />
            <Box>
              <Typography variant="h1">Converse with anyone</Typography>
              <Typography variant="h1">with any language</Typography>
            </Box>
          </Grid>
        </Box>
      </Grid>
      <Grid xs={12} sm={9} md={8}>
        <Box className={classes.authNav}>
          <Typography variant="h3">Already have an account?</Typography>
          <Button
            className={classes.createAccountButton}
            variant="outlined"
            onClick={() => history.push("/login")}
            color="primary"
          >
            Login
          </Button>
        </Box>
        <Grid className={classes.authFormContainer}>
          <Box className={classes.authForm}>
            <Typography variant="h2">Create an account.</Typography>
            <form onSubmit={handleRegister}>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  required
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  required
                />
              </FormControl>
              <FormControl
                error={!!formErrorMessage.confirmPassword}
                margin="normal"
                required
                fullWidth
              >
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
              <FormControl
                error={!!formErrorMessage.confirmPassword}
                margin="normal"
                required
                fullWidth
              >
                <TextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
              <Box
                sx={{ display: "flex", justifyContent: "center", mt: "15%" }}
              >
                <Button type="submit" variant="contained" color="primary">
                  <Typography variant="button">Create</Typography>
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
