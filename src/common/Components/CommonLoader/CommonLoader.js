import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-block",
    position: "relative",
    width: 80,
    height: 80,
    "& div": {
      display: "inline-block",
      position: "absolute",
      left: 8,
      width: 16,
      background: "lightgrey",
      animation: "spinner 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite",
    },
    "& div:nth-child(1)": {
      left: 8,
      animationDelay: "-0.24s",
    },
    "& div:nth-child(2)": {
      left: 32,
      animationDelay: "-0.12s",
    },
    "& div:nth-child(3)": {
      left: 56,
      animationDelay: "0",
    },
  },
  "@keyframes spinner": {
    "0%": {
      top: 8,
      height: 64,
    },
    "50%": {
      top: 24,
      height: 32,
    },
    "100%": {
      top: 24,
      height: 32,
    },
  },
}));

const CommonLoader = () => {
  const classes = useStyles();
  return (
    <div className={classes?.root}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default CommonLoader;
