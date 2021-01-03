import React, { useState } from "react";

import {
  IconButton,
  ButtonBase,
  makeStyles,
  Box,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/AddAPhoto";
import firebase from "firebase/app";

const useStyles = makeStyles((theme) => ({
  imageButton: {
    position: "relative",
    width: 100,
    height: 100,
    margin: theme.spacing(1),
    borderRadius: 10,
    overflow: "hidden",

    border: "2px solid rgb(240,240,240)",
  },
  iconButton: {
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: theme.spacing(1),
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  imageSrc: {
    width: 100,
    height: 100,
    margin: theme.spacing(1),
    objectFit: "cover",
  },
  input: {
    display: "none",
  },
}));

const ImagePicker = (props) => {
  const { images, setSrc, length = 1, order, removeImage } = props;
  const classes = useStyles();

  const handleChange = (e) => {
    if (e.target.files[0]) {
      const name =
        new Date()
          .toString()
          .replace(/[^\w\s]/gi, "")
          .split(" ")
          .join("") + e.target.files[0].name;

      handleUpload(e.target.files[0], name);
    }
  };

  const handleUpload = (file, name) => {
    const uploadTask = firebase.storage().ref(`images/${name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        firebase
          .storage()
          .ref("images")
          .child(name)
          .getDownloadURL()
          .then((url) => {
            setSrc(url, order);
          });
      }
    );
  };
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (imageIndex) => {
    setOpen(true);
    setSelected(imageIndex);
  };

  return (
    <>
      <Box display="flex" flexWrap="wrap">
        {images.map((item, imageIndex) => {
          return (
            <ButtonBase
              onClick={() => handleOpen(imageIndex)}
              focusRipple
              key={imageIndex}
              className={classes.imageButton}
            >
              <img alt="netan" src={item} className={classes.imageSrc} />
            </ButtonBase>
          );
        })}
        {images.length < length && (
          <>
            <input
              accept="image/*"
              className={classes.input}
              id={`icon-button-file-${order}`}
              onChange={handleChange}
              type="file"
            />
            <label htmlFor={`icon-button-file-${order}`}>
              <IconButton
                variant="contained"
                component="span"
                className={classes.iconButton}
              >
                <AddIcon />
              </IconButton>
            </label>
          </>
        )}
      </Box>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle id="simple-dialog-title">Fotoğrafı Sil</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Vazgeç
          </Button>
          <Button
            onClick={() => {
              removeImage(selected);
              handleClose();
            }}
            color="primary"
          >
            Sil
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ImagePicker;
