import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "2px solid rgb(233, 235, 235)",
    width: "fit-content",
    alignItems: "center",
    borderRadius: 10,
    background: "rgb(255, 255, 255)",
    cursor: "pointer",
    display: "flex",
  },
}));

const Icons = ({ icon, className, onClick, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes?.root} ${className}`} onClick={onClick} id={id}>
      {icon}
    </div>
  );
};

export default Icons;
