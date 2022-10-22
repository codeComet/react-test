import React, { useEffect, useState } from "react";
import axios from "axios";
import Photo from "./Photo";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const classes = useStyles();
  function getPhotos() {
    axios
      .get(
        "https://api.unsplash.com/photos?client_id=LH3Gyvw32rcJ5jiTnjWoBjThsiOdnNgTbrFlnbWSyio&per_page=16"
      )
      .then((res) => setPhotos(res.data));
  }

  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <div className={classes.photos}>
      {photos.length > 0 ? (
        photos.map((photo, index) => (
          <Box
            key={index}
            sx={{
              width: { xl: "25%", lg: "25%", md: "50%", sm: "100%" },
            }}
          >
            <Photo img={photo.urls?.small} />
          </Box>
        ))
      ) : (
        <h6>Fetching photos...</h6>
      )}
    </div>
  );
};

export default Photos;

const useStyles = makeStyles({
  photos: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "start",
    flexWrap: "wrap",
  },
});
