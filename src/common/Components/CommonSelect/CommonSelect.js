import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { v4 as uuid } from "uuid";

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
    "& .MuiSelect-outlined.MuiSelect-outlined": {
      padding: "6px 8px",
      backgroundColor: "rgba(242, 242, 242, 0.4)",
      border: "1px solid rgb(85, 185, 98)",
    },
    "& input": {
      padding: "5px 8px",
      flex: "1 1",
      borderRadius: "5px",
      fontSize: "13px",
      color: "#000",
      fontWeight: 500,
    },
  },
  menuItem: {
    fontSize: 13,
    borderRadius: 20,
    padding: "4px 8px",
  },
  selected: {
    fontSize: 13,
  },
}));

const CommonSelect = ({ data, store }) => {
  const uuidv4 = uuid();
  const classes = useStyles();

  return (
    <FormControl className={classes?.root}>
      <InputLabel id={uuidv4}>{data?.label}</InputLabel>
      <Select
        labelId={uuidv4}
        onChange={(e) =>
          store?.onChange({ name: data?.store, value: e?.target?.value })
        }
        value={store?.value?.[data?.store]?.value}
        variant="outlined"
        className={classes?.selected}
      >
        {data?.options?.map((each, index) => (
          <MenuItem
            value={each?.value}
            key={index}
            className={classes?.menuItem}
          >
            {each?.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CommonSelect;
