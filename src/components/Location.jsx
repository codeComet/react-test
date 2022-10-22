import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const Location = () => {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const classes = useStyles();

  useEffect(() => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        if (location) {
          setLatitude(location.coords.latitude);
          setLongitude(location.coords.longitude);
        }
      });
    }
  }, []);

  return (
    <div>
      <Typography variant="h4" className={classes.header}>
        Your location is Longitude: {longitude} Latitude: {latitude}
      </Typography>
    </div>
  );
};

export default Location;

const useStyles = makeStyles({
  header: {
    fontFamily: "'Poppins', sans-serif !important",
    textAlign: "center",
  },
});
