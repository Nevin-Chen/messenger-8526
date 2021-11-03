import React from "react";
import { Grid, Box, Typography, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import sideBackground from "../../assets/images/bg-img.png";
import bubbleImage from "../../assets/images/bubble.svg";

const useStyles = makeStyles(() => ({
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
}));

const Form = ({ handleAuth, history, formErrorMessage }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.overlayFrame} item sm={3} md={4}>
      <CardMedia
        className={classes.sideBackground}
        component="img"
        image={sideBackground}
        alt="side-img"
      />
      <Grid className={classes.overlayBackground}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            src={bubbleImage}
            alt="text-bubble"
            component="img"
            sx={{ marginBottom: "8%", width: "15%", height: "15%" }}
          />
          <Grid>
            <Typography variant="h1">Converse with anyone</Typography>
            <Typography variant="h1">with any language</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Form;
