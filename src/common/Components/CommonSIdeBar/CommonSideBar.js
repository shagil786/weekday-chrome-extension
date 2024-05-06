import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: (props) => `${props?.width}vmin`,
  },
}));

const CommonSideBar = ({ children, width, className }) => {
  const classes = useStyles({ width: width });
  return <div className={`${classes?.root} ${className}`}>{children}</div>;
};

export default CommonSideBar;
