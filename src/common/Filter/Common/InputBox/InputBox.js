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
    minWidth: (props) => props?.width,
    minHeight: (props) => props?.minHeight,
    "& .MuiOutlinedInput-root": {
      height: "100%",
    },
    "& input": {
      padding: "5px 8px",
      flex: "1 1",
      height: "100%",
      backgroundColor: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "13px",
      color: "#000",
      fontWeight: 500,
      height: "100%",
    },
  },
}));

const InputBox = ({ data, store }) => {
  const classes = useStyles(data?.css);
  return (
    <TextField
      placeholder={data?.label}
      value={store?.value[data?.store]?.value}
      onChange={(e) =>
        store?.onChange({ name: data?.store, value: e?.target?.value })
      }
      variant="outlined"
      className={classes?.root}
    />
  );
};

export default InputBox;
