import {
  TextField,
  darken,
  lighten,
  makeStyles,
  styled,
} from "@material-ui/core";
import { Close, Group, KeyboardArrowDown } from "@material-ui/icons";
import { Autocomplete } from "@mui/material";
import React from "react";
import { v4 as uuid } from "uuid";

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.4375em",
    color: "rgba(0, 0, 0, 0.87)",
    cursor: "text",
    display: "flex",
    flexWrap: "wrap",
    transition: "all 100ms ease 0s",
    alignItems: "center",
    position: "relative",
    borderRadius: "4px",
    boxSizing: "border-box",
    "& .MuiInputBase-input": {
      minWidth: (props) => `${props?.minWidth} !important`,
      width: (props) => `${props?.width} !important`,
      padding: "2px !important",
      fontSize: 13,
    },
    "& .MuiFormControl-root": {
      alignItems: "center",
      display: "grid",
      flex: "1 1 0%",
      flexWrap: "wrap",
      position: "relative",
      overflow: "hidden",
      boxSizing: "border-box",
    },
  },
  border: {
    border: "1px solid rgba(0, 0, 0, 0.87)",
    height: "100%",
  },
  arrow: {
    color: "rgba(0, 0, 0, 0.3)",
    fontSize: 18,
  },
}));

const GroupHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === "light"
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled("ul")({
  padding: 0,
});

const SingleSelect = ({ data, store }) => {
  const uuidv4 = uuid();
  const classes = useStyles(data?.css);

  return (
    <Autocomplete
      multiple={data?.isMulti}
      className={classes?.root}
      id={uuidv4}
      options={data?.options}
      groupBy={data?.isMulti ? (option) => option.category : undefined}
      getOptionLabel={(options) => options?.label}
      getOptionKey={(options) => options?.value}
      renderInput={(params) => (
        <TextField variant="outlined" {...params} placeholder={data?.label} />
      )}
      onChange={(event, value) => console.log(event, value)}
      value={store?.value?.[data?.label]?.value}
      autoComplete
      clearIcon={<Close className={classes?.arrow} />}
      popupIcon={<KeyboardArrowDown className={classes?.arrow} />}
    />
  );
};

export default SingleSelect;
