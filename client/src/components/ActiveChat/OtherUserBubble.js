import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar, Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  bubble: {
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "0 10px 10px 10px",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: -0.2,
    padding: 8,
  },
  attachments: {
    borderRadius: "10px 10px 0 10px",
  },
}));

const OtherUserBubble = (props) => {
  const classes = useStyles();
  const { text, time, otherUser, attachments } = props;

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      ></Avatar>
      <Box>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>

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
              className={classes.bubble}
              sx={{
                position: "absolute",
                bottom: 5,
                width: "100%",
              }}
            >
              <Typography className={classes.text}>{text}</Typography>
            </Box>
          </Box>
        )}

        {attachments && text && attachments.length > 1 && (
          <Fragment>
            <Box className={classes.bubble} sx={{ mb: 1, width: 'max-content'}}>
              <Typography className={classes.text}>{text}</Typography>
            </Box>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              spacing={1}
            >
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
    </Box>
  );
};

export default OtherUserBubble;
