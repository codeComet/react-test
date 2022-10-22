import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Box,
  Button,
  Typography,
  TextField,
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { VscAccount } from "react-icons/vsc";

export default function Login() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const users = useSelector((state) => state.users);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const user = users.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password
    );

    if (user) {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: user,
      });
      toast.success("Login successful");
      navigate("/");
      window.location.reload();
    } else {
      toast.error("Username or password is incorrect");
    }
    setLoading(false);
  };

  return (
    <Box className={classes.container}>
      <Card sx={{ maxWidth: 400, padding: "1rem" }}>
        <Box className={classes.logoContainer}>
          <VscAccount style={{ fontSize: "3rem", color: "#35356d" }} />
          <Typography variant="h5">Sign in to your account</Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <TextField
              variant="outlined"
              label="Username"
              type="text"
              name="username"
              required
              fullWidth
              value={formData.username}
              sx={{ marginBottom: "1rem" }}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              required
              fullWidth
              onChange={handleChange}
            />
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              disabled={loading}
            >
              Sign in
            </Button>
          </CardActions>
        </form>
        <Divider sx={{ margin: "0.5rem 0" }} />
        <Box sx={{ textAlign: "center" }}>
          <Link to={"/register"} style={{ textDecoration: "none" }}>
            <Button>Don't have an account? Signup now!</Button>
          </Link>
        </Box>
      </Card>
    </Box>
  );
}

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#e9e9e9",
  },

  logoContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
});
