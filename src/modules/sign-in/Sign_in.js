import * as React from "react";
import background from "../../assets/images/background-enter.jpg";
import logo from "../../assets/images/logo.png";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import { useRef, useState } from "react";
import { API_CLIENT } from "../../services/api_client";
import { useAlert } from "react-alert";

const useStyles = makeStyles(() => ({
  root: {
    background: "rgb(68 64 60)",
    borderRadius: "5px",
  },
  input: {
    color: "white",
  },
}));

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Sign_in = () => {
  const userid = useRef("");
  const pwd = useRef("");
  const [toggle, setToggle] = useState(false);
  const alert = useAlert();

  const handleSignIn = () => {
    if (toggle) {
      return (
        <a href="/home">
          <button
            className="bg-red-600 p-2 px-4 rounded h-12 font-semibold text-lg"
            style={{ width: "19rem" }}
            onClick={click}
          >
            Sign In
          </button>
        </a>
      );
    } else {
      return (
        <button
          className="bg-red-600 p-2 px-4 rounded h-12 font-semibold text-lg"
          style={{ width: "19rem" }}
          onClick={click}
        >
          Sign In
        </button>
      );
    }
  };

  const click = async () => {
    console.log("sign in click");
    const uid = userid.current.value;
    const password = pwd.current.value;

    const userObject = { userid: uid, password: password };
    if (uid !== "" && password !== "" && toggle === false) {
      try {
        const result = await API_CLIENT.post(
          process.env.REACT_APP_LOGIN_URL,
          userObject
        );
        var object = result.data;
        if (object.userid) {
          setToggle(true);
        } else {
          alert.show("Wrong User-ID or Password");
        }
      } catch (err) {
        console.log("Error in Login Call ", err);
      }
    } else {
      alert.show("Incomplete fields");
    }
  };

  const foot = [
    "FAQ",
    "Help Centre",
    "Terms of Use",
    "Privacy",
    "Cookie Preference",
    "Corporate Information",
  ];

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#A8A29E",
      },
      secondary: {
        main: "#A8A29E",
      },
    },
  });

  const classes = useStyles();
  return (
    <>
      <div
        classname="bg-auto bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="h-screen">
          <div className="w-52 ml-7">
            <img src={logo} alt="logo..."></img>
          </div>
          <div className="text-white w-3/12 m-auto bg-black h-3/4">
            <div className="flex flex-col text-white">
              <div className="m-11">
                <div className="text-3xl font-bold">Sign In</div>
                <div className="mt-7">
                  <ThemeProvider theme={theme}>
                    <TextField
                      id="standard-basic"
                      label="Email or phone number"
                      variant="filled"
                      className={classes.root}
                      inputRef={userid}
                      sx={{
                        "& .MuiFormLabel-root": {
                          color: "secondary.main",
                        },
                        width: 300,
                        "& .MuiFilledInput-input": {
                          color: "white",
                        },
                      }}
                    />
                  </ThemeProvider>
                </div>
                <div className="mt-5">
                  <ThemeProvider theme={theme}>
                    <FormControl
                      className={classes.root}
                      sx={{
                        "& .MuiFormLabel-root": {
                          color: "secondary.main",
                        },
                        width: 300,
                        "& .MuiFilledInput-input": {
                          color: "white",
                        },
                      }}
                      variant="filled"
                    >
                      <InputLabel htmlFor="filled-adornment-password">
                        Password
                      </InputLabel>
                      <FilledInput
                        id="filled-adornment-password"
                        type={showPassword ? "text" : "password"}
                        inputRef={pwd}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </ThemeProvider>
                </div>
                <div className="mt-8">{handleSignIn()}</div>
                <div className="flex flex-row justify-between text-stone-400">
                  <span className="text-xs">
                    <Checkbox
                      {...label}
                      color="default"
                      sx={{ color: "#bdbdbd" }}
                      size="small"
                    />
                    Remember me
                  </span>
                  <span className="mt-3 text-xs">
                    <a href="/">Need help ?</a>
                  </span>
                </div>
                <div className="mt-14">
                  <span className="text-lg text-stone-400">
                    New to Netflix?{" "}
                    <a href="/" className="text-white">
                      Sign up now
                    </a>
                  </span>
                  <div className="text-sm mt-3 text-stone-400">
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.{" "}
                    <a href="/" className="text-sky-500">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-black h-64 text-white">
          <div className="text-transparent">h</div>
          <div className="w-7/12 m-auto text-stone-500">
            <div className="mt-4 text-base">
              Questions? Call{" "}
              <a href="/" className="no-underline hover:underline">
                000-800-919-1694
              </a>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-7 text-sm">
              {foot.map((element) => (
                <p>
                  <a href="/" className="no-underline hover:underline">
                    {element}
                  </a>
                </p>
              ))}
            </div>
            <div>
              <span>
                <select className="w-24 py-3 mt-5 border-stone-500 rounded border text-center bg-black">
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
