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
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { VscAccount } from "react-icons/vsc";
import { loginUser } from "../actions/auth";

export default function Login() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { messages } = useSelector((state) => state.message);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
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

    dispatch(
      login({ username: formData.username, password: formData.password })
    )
      .then(() => {
        toast.success(messages.success);
        navigate("/");
      })
      .catch(() => {
        toast.error(messages.error);
        setLoading(false);
      });
    setLoading(false);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

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
