import React from "react";
import { Navigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Location from "./Location";
import Photos from "./photos/Photos";

const Home = () => {
  const user = localStorage.getItem("user");
  const classes = useStyles();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={classes.container}>
      <div className={classes.locationContainer}>
        <Location />
      </div>
      <div className={classes.photoContainer}>
        <Photos />
      </div>
    </div>
  );
};

export default Home;

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",

    margin: "5rem auto",
  },

  locationContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "2rem auto",
  },

  photoContainer: {
    width: "90%",
    margin: "2rem auto",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
  },
});
