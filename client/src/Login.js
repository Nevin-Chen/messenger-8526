import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import SideBackground from "./components/Auth/SideBackground";
import Nav from "./components/Auth/Nav";

const Login = (props) => {
  const history = useHistory();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container root>
      <SideBackground />
      <Grid item xs={12} sm={9} md={8}>
        <Nav
          history={history}
          route={"/register"}
          headerText={`Don't have an account?`}
          buttonText={"Create account"}
        />
        <Grid container justifyContent="center">
          <Grid item xs={7}>
            <Typography variant="h2">Welcome back!</Typography>
            <form onSubmit={handleLogin}>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  aria-label="username"
                  label="E-mail Address"
                  name="username"
                  type="username"
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  label="Password"
                  aria-label="password"
                  type="password"
                  name="password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <Typography color="primary">Forgot?</Typography>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <Box
                sx={{ display: "flex", justifyContent: "center", mt: "12%" }}
              >
                <Button type="submit" variant="contained" color="primary">
                  <Typography variant="button">Login</Typography>
                </Button>
              </Box>
            </form>
          </Grid>
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
