import React, { useState } from "react";
import {
  FormControl,
  FilledInput,
  InputAdornment,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
  },
  icon: {
    color: "#c2c2c2",
    width: "30px",
    height: "30px",
    margin: "0 8px 0 8px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  attachmentIndicator: {
    height: '10px',
    width: '10px',
    backgroundColor: '#FF0000',
    borderRadius: '50%',
    position: "absolute",
    top: 0,
    right: 0
  }
}));

const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [imageData, setImageData] = useState("");

  const { postMessage, otherUser, conversationId, user } = props;

  let attachments = [];

  const uploadImage = async () => {
    for (let i = 0; i < imageData.length; i++) {
      const data = new FormData();
      data.append("file", imageData[i]);
      data.append("upload_preset", "hkeym3ho");
      data.append("cloud_name", "dkdkftvsq");

      let response = await fetch(
        "  https://api.cloudinary.com/v1_1/dkdkftvsq/image/upload",
        {
          method: "post",
          body: data,
        }
      );

      let { url } = await response.json();

      attachments.push(url);
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (imageData.length) {
      await uploadImage();
    }

    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: attachments.length > 0 ? attachments : null,
    };
    await postMessage(reqBody);
    setText("");
    setImageData("");
    attachments = [];
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <label>
                <SentimentSatisfiedIcon className={classes.icon} />
              </label>
              <label>
                {imageData ? (
                  <Box sx={{position:'relative'}}>
                    <Box className={classes.attachmentIndicator}/>
                    <FileCopyOutlinedIcon className={classes.icon} />
                  </Box>
                ) : (
                  <FileCopyOutlinedIcon className={classes.icon} />
                )}
                <input
                  type="file"
                  style={{ display: "none" }}
                  multiple="multiple"
                  onChange={(e) => {
                    setImageData(e.target.files);
                    return;
                  }}
                ></input>
              </label>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
