import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    event.preventDefault();

    fetch('http://13.232.128.66:8080/gj-erp/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: data.get("email"),
    password: data.get("password"),
  })
})
.then(res => res.json())
.then(result=>{
console.log("res",result)  
if(result.success){
navigate("/dashboard")
}else{
  alert("invalid credeantiol")
}
});
  };

  return (
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs"
        sx={{
          border: 1,
          borderColor:"lightgray",
          mt: 5,
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4"
            sx={{
              fontWeight: "600",
            }} >Sign In
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "gray"
            }}
          >
            Log in to Your acoount to continue
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 4 }}
          >
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6">Email Address</Typography>
              <TextField
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </Box>
            <Typography variant="h6">Password</Typography>
            <TextField
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Box sx={{
              display: "flex",
              flex: "row",
              justifyContent: "space-between",
            }}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me" />
              <Link href="#" variant="body2" sx={{ mt: 1 }}>
                Forgot password?
              </Link>
            </Box>

            <Button
              // onClick={() => {
              //   navigate("/dashboard");
              // }}
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 3, backgroundColor: "#ecb52b", color: "black" }}
            >
              Sign In
            </Button>
              <Divider sx={{fontSize:'12px', color:"gray"}}>OR CONTINUE WITH</Divider>
              <Box width="100" sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "row",
            width:"100%",
            gap:"15px",
            justifyContent:"center"
          }}>
                <Button sx={{background:"lightgray",color:"black",px:3,fontWeight:"bold"}}>Google</Button>
                <Button sx={{background:"lightgray",color:"black",px:3,fontWeight:"bold"}}>Facebook</Button>
                <Button sx={{background:"lightgray",color:"black",px:3,fontWeight:"bold"}}>Twitter</Button>
              </Box>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}

        <Typography variant="body2"
          color="text.secondary"
          align="center" sx={{ mt: 4, mb: 4 }}>Don't have an account?
          <Link href="#" variant="body2">
            {"Sign Up"}
          </Link>
        </Typography>
      </Container>
    </ThemeProvider>
  );
}
