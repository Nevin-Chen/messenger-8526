import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
  },
  attachments: {
    borderRadius: "10px 10px 0 10px",
  },
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, attachments } = props;
  console.log(attachments, "asjdiojadss");
  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>

      {text && !attachments && (
        <Box className={classes.bubble}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
      )}

      {attachments && !text && (
        <Grid container direction="row" justifyContent="flex-end" spacing={1}>
          {attachments.map((image) => (
            <Grid item>
              <img
                className={classes.attachments}
                src={image}
                alt="text-attachment"
                height={attachments.length > 1 ? "100px" : "180px"}
                width={attachments.length > 1 ? "120px" : "200px"}
              />
            </Grid>
          ))}
        </Grid>
      )}

      {attachments && text && attachments.length === 1 && (
        <Box sx={{ position: "relative", textAlign: "center" }}>
          <img
            className={classes.attachments}
            src={attachments[0]}
            alt="text-attachment"
            height="180px"
            width="200px"
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 5,
              borderRadius: "0 0 0 10px",
              background: "#F4F6FA",
              width: "100%",
            }}
          >
            <Typography className={classes.text}>{text}</Typography>
          </Box>
        </Box>
      )}

      {attachments && text && attachments.length > 1 && (
        <Fragment>
          <Box className={classes.bubble} sx={{ mb: 1 }}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
          <Grid container direction="row" justifyContent="flex-end" spacing={1}>
            {attachments.map((image) => (
              <Grid item>
                <img
                  className={classes.attachments}
                  src={image}
                  alt="text-attachment"
                  height="100px"
                  width="120px"
                />
              </Grid>
            ))}
          </Grid>
        </Fragment>
      )}
    </Box>
  );
};

export default SenderBubble;
