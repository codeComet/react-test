import React, { useState, useEffect } from "react";
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
import { VscAccount } from "react-icons/vsc";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { registerUser } from "../actions/auth";

export default function Register() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
    }
    // console.log(formData);
    dispatch(
      registerUser({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      })
    ).then(() => {
      toast.success("Registration successful!");
      navigate("/login");
    });
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Box className={classes.container}>
      <Card sx={{ maxWidth: 400, padding: "1rem" }}>
        <Box className={classes.logoContainer}>
          <VscAccount style={{ fontSize: "3rem", color: "#35356d" }} />
          <Typography variant="h5">Sign up for your account</Typography>
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
              label="Your email"
              type="email"
              name="email"
              required
              fullWidth
              value={formData.email}
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
              sx={{ marginBottom: "1rem" }}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
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
              Register
            </Button>
          </CardActions>
        </form>
        <Divider sx={{ margin: "0.5rem 0" }} />
        <Box sx={{ textAlign: "center" }}>
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <Button>Already have an account? Login now!</Button>
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
