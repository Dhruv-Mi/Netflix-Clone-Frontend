import * as React from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRef } from "react";
import { API_CLIENT } from "../../services/api_client";
import { useAlert } from "react-alert";

const useStyles = makeStyles(() => ({
  root: {
    background: "rgb(255 255 255)",
  },
}));

export const Create_account = ({ handleClick }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#78716C",
      },
      secondary: {
        main: "#78716C",
      },
    },
  });

  const classes = useStyles();

  const userid = useRef("");
  const pwd = useRef("");
  const alert = useAlert();

  const handleCreateAccount = async () => {
    console.log("create account");
    const uid = userid.current.value;
    const password = pwd.current.value;
    const userObject = { userid: uid, password: password };

    if (uid !== "" && password !== "") {
      try {
        const result = await API_CLIENT.post(
          process.env.REACT_APP_REGISTER_URL,
          userObject
        );
        if(result.data.message==="User already exist"){
          alert.show("User already exist");
        }
        else{
          handleClick();
        }
      } catch (err) {
        console.log("Error in Login Call ", err);
      }
    } else {
      alert.show("Incomplete Fields!!!");
    }
  };
  return (
    <>
      <div style={{ height: "80vh" }}>
        <div className="text-transparent">h</div>
        <div className="m-auto w-96 mt-10">
          <div className="text-sm">
            STEP <strong>1</strong> of <strong>3</strong>
          </div>
          <div className="text-3xl font-semibold mt-2">
            Create a password to start
            <br /> your membership
          </div>
          <div className="mt-4 text-lg">
            Just a few more steps and you're done!
            <br /> We hate paperwork, too.
          </div>
          <div className="mt-4">
            <ThemeProvider theme={theme}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className={classes.root}
                inputRef={userid}
                sx={{
                  width: 400,
                }}
              />
            </ThemeProvider>
          </div>
          <div className="mt-4">
            <ThemeProvider theme={theme}>
              <FormControl sx={{ width: 400 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Add a password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  inputRef={pwd}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Add a password"
                />
              </FormControl>
            </ThemeProvider>
          </div>
          <div className="mt-4">
            <button
              className="bg-red-600 p-2 px-4 rounded h-12 font-semibold text-lg text-white"
              style={{ width: "25rem", height: "4rem", fontSize: "1.5rem" }}
              onClick={handleCreateAccount}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
