import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../../assets/images/logo.png";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0.5,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
  },
  title: {
    color: "white",
  },
  appBarTransparent: {
    backgroundColor: "rgba(255, 255, 255,0)",
  },
  appBarSolid: {
    backgroundColor: "black",
  },
}));

export const Navbar = () => {
  var options = [
    "Trending",
    "Top Rated",
    "Documentaries",
    "Movies",
    "TV Shows",
  ];
  const classes = useStyles();

  const [navBackground, setNavBackground] = useState("appBarTransparent");
  const navRef = React.useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > window.innerHeight/2;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        elevation={0}
        className={classes[navRef.current]}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img className="w-32 ml-8 mr-10" src={logo} alt="logo..."></img>
          </Typography>
          {options.map((elements) => (
            <Typography className={classes.title}>
              <button>
                <div className="mx-3 font-medium">{elements}</div>
              </button>
            </Typography>
          ))}
          <div className="ml-5">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
