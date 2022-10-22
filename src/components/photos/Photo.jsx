import React from "react";
import { makeStyles } from "@mui/styles";

const Photo = ({ img }) => {
  const classes = useStyles();
  return <div className={classes.photo}>{img && <img src={img} />}</div>;
};

export default Photo;

const useStyles = makeStyles({
  photo: {
    margin: "1rem auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "80%",
      objectFit: "contain",
    },
  },
});
