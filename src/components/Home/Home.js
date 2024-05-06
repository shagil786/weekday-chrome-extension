import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: (props) =>
      `calc(100% - ${props?.leftWidth}vmin - ${props?.rightWidth}vmin - 60px)`,
    margin: (props) =>
      `0px ${props?.rightWidth}vmin 0px ${props?.leftWidth}vmin`,
    top: "80px",
    position: "relative",
  },
}));

const Home = ({ width }) => {
  const classes = useStyles(width);
  return <div className={classes?.root}>Home</div>;
};

export default Home;
