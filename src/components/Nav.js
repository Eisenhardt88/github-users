import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export const Nav = (props) => {
  return (
    <div className="nav">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            <Link to="/" className="home">
              Home
            </Link>
          </Typography>
        </Toolbar>
        <IconButton edge="end" color="inherit" aria-label="menu">
          <MenuIcon
            onClick={() =>
              props.setAlign(props.position === "center" ? "left" : "center")
            }
          />
        </IconButton>
      </AppBar>
    </div>
  );
};
