import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./SignInComponent.css";
import Shreesh from "./../../assests/Shreesh.jpg";
import ToggleButton from "@mui/material/ToggleButton";
import Switch from "@mui/material/Switch";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInComponent() {
  const [selected, setSelected] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailErrorText, setEmailErrorText] = React.useState("");
  const [passwordErrorText, setPasswordErrorText] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailErrorText("Please enter email");
    } else {
      setEmailErrorText("");
    }
    if (!password) {
      setPasswordErrorText("Please enter password");
    } else {
      setPasswordErrorText("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="mainOutsideDiv">
      <div className="toggleButton">
        <ToggleButton
          className="togglebuttonstyle"
          // value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          <Switch />
        </ToggleButton>
      </div>
      <div className="main">
        <ThemeProvider
          sx={{
            height: 1,
            width: 1,
          }}
          theme={theme}
        >
          <div className="themeProviderDiv">
            <Container
              sx={{
                // height: 400,
                maxWidth: "60%!important",
              }}
              component="main"
            >
              {/* <CssBaseline /> */}
              <div className="boxDiv">
                <Box
                  selected={selected}
                  sx={{
                    marginTop: 4,
                    display: "flex",
                    marginLeft: 0,
                    // flexDirection: "column",
                    flexDirection: selected === true ? "column" : "row",
                    alignItems: "center",
                    justifyItems: "center",
                    justifyContent: "center",
                    minWidth: "100%",
                    m: 0,
                  }}
                >
                  <div className="avtaricon">
                    <Avatar
                      sx={{
                        m: 1,
                        bgcolor: "secondary.main",
                        width: 100,
                        height: 100,
                        marginRight: selected === true ? 0 : 18,
                      }}
                      src={Shreesh}
                    ></Avatar>
                  </div>
                  <div className="mainbody">
                    <div className="typographySignIn">
                      <Typography
                        sx={{
                          alignItems: "center",
                          justifyItems: "center",
                          justifyContent: "center",
                        }}
                        component="h1"
                        variant="h5"
                      >
                        Signin
                      </Typography>
                    </div>

                    <Box
                      component="form"
                      onSubmit={handleSubmit}
                      noValidate
                      sx={{ mt: 1 }}
                    >
                      <TextField
                        margin="normal"
                        // error
                        // helperText="Incorrect entry."
                        required
                        fullWidth
                        id="email"
                        // label="Email Address"
                        placeholder="Enter Name*"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        error={!!emailErrorText}
                        helperText={emailErrorText}
                        onChange={(e) => setEmail(e.target.value)}
                        // sx={{ mb: 2, position:'relative' }}
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        // label="Password"
                        placeholder="Password*"
                        inputProps={{ maxLength: 8 }}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        error={!!passwordErrorText}
                        helperText={passwordErrorText}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />
                      <Button
                        type="submit"
                        onClick={onSubmit}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign In
                      </Button>
                      <Grid container>
                        <Grid item xs>
                          <Link href="#" variant="body2">
                            Forgot password?
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </div>
                </Box>
              </div>
              <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}
