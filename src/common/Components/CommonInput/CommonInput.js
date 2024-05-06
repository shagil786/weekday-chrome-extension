import { TextField, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.4375em",
    color: "rgba(0, 0, 0, 0.87)",
    cursor: "text",
    display: "inline-flex",
    alignItems: "center",
    position: "relative",
    borderRadius: "4px",
    width: "100%",
    "& .MuiOutlinedInput-root": {
      width: "100%",
    },
    "& .MuiInputLabel-outlined": {
      fontSize: "0.6875rem",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
      transform: "translate(8px, 8px) scale(1)",
    },
    "& input": {
      padding: "5px 8px",
      flex: "1 1",
      backgroundColor: "rgba(242, 242, 242, 0.4)",
      border: "1px solid rgb(85, 185, 98)",
      borderRadius: "5px",
      fontSize: "13px",
      color: "#000",
      fontWeight: 500,
    },
  },
}));

const CommonInput = ({ data, store }) => {
  const classes = useStyles();
  return (
    <TextField
      {...data}
      value={store?.value[data?.store]?.value}
      onChange={(e) =>
        store?.onChange({ name: data?.store, value: e?.target?.value })
      }
      variant="outlined"
      className={classes?.root}
    />
  );
};

export default CommonInput;
