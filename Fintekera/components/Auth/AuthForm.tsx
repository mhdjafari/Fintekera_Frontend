"use client"
import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

const useAuth = (callback) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      username === process.env.NEXT_PUBLIC_DEMO_USERNAME &&
      password === process.env.NEXT_PUBLIC_DEMO_PASSWORD
    ) {
      callback();
    } else {
      setError("Invalid username or password");
    }
  };

  return {
    setUsername,
    setPassword,
    handleSubmit,
    error,
  };
};

const AuthForm = ({ callback }) => {
  const { setUsername, setPassword, handleSubmit, error } = useAuth(callback);

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col max-w-md w-full">
        <TextField
          type="text"
          label="Username"
          variant="outlined"
          margin="normal"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>} {/* Display error message in red */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="mt-8" // Increase the gap between fields and button
          style={{ width: "150px", backgroundColor: "#000", color: "#fff", borderRadius: "999px" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;
