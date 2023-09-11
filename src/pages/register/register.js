import React, { useCallback ,useState} from "react";
import { useNavigate, Navigate, } from "react-router";
import {auth} from "../../firebase";
import { useEffect } from "react";
import { Box, Typography , Input, Button } from "@mui/material";
import { createMuiTheme, ThemeProvider } from "@mui/material/styles";
import wallpaper from "../../wallpaper/wp.jpg"
import "../login/login.css" /* same css for both login and register page */

const Register = ({ navigate }) => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const theme = createMuiTheme({
    typography: {
      fontSize: 16,
    },
    palette: {
      primary: {
        main: "#000000",
      },
    },
  });


  

  const handleRegister = useCallback(async e => {
    e.preventDefault();

    try {
      await auth
        .auth()
        .createUserWithEmailAndPassword(email, password);
      navigate.push("/");
    } catch (error) {
      alert(error);
    }
  }, [navigate]);

  return (
    <div className="App ">
    <img  src={wallpaper}/>
    <ThemeProvider className="glass-morphism "  theme={theme}>
      <Box sx={{
        width: "30vw",
        height: "50vh",
        borderRadius: "20px",
        backgroundColor: "#ffffff00",
        boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.5)",
        padding: "20px",
      }}>
        <Typography  sx={{  textAlign: "center" ,fontSize:"24px"}}>Login</Typography >
        <Input
          sx={{
            margin: "10px 0",
            width: "100%",
          }}
          placeholder="email"
          onChange={(e) => setemail(e.target.value)}
        />
        <Input
          sx={{
            margin: "10px 0",
            width: "100%",
          }}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <Input
          sx={{
            margin: "10px 0",
            width: "100%",
          }}
          placeholder="Password"
          onChange={(e) => setPassword2(e.target.value)}
          type="password"
        />
        <Button
          sx={{
            margin: "20px 20px",
            alignSelf :"center",
            justifySelf:"center",
            width: "90%",
          }}
          variant="contained"
          color="primary"
          onClick={handleRegister}
        >
          Login
        </Button>
        <Typography  sx={{  textAlign: "center" ,color:"grey",fontSize:"10px"}}>this app directly logs in if you registered before</Typography >

      </Box>
    </ThemeProvider>
    </div>
  );
};

export default Navigate(Register);