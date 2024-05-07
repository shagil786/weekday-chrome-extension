import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    padding: "10px 30px",
    width: (props) =>
      `calc(100% - ${props?.leftWidth}vmin - ${props?.rightWidth}vmin - 60px)`,
    margin: (props) =>
      `0px ${props?.rightWidth}vmin 0px ${props?.leftWidth}vmin`,
    height: 60,
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px 0px",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
}));

const Header = ({ width }) => {
  const classes = useStyles(width);
  return (
    <div className={classes?.root}>
      <div className={classes?.left}>
        <span>👋 </span>
        <span>Md Shagil</span>
      </div>
      <div className={classes?.right}>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default Header;
