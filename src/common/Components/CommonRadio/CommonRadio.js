import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& span": {
      fontSize: 13,
    },
    "& .MuiSvgIcon-root": {
      fontSize: 20,
      color: "#000",
    },
  },
}));

const CommonRadio = ({ data, store }) => {
  const classes = useStyles();
  return (
    <FormControl>
      <FormLabel>{data?.label}</FormLabel>
      <RadioGroup
        onChange={(e) =>
          store?.onChange({ name: data?.store, value: e?.target?.value })
        }
        value={parseInt(store?.value?.[data?.store])}
      >
        {data?.options?.map((each, index) => (
          <FormControlLabel
            className={classes?.root}
            key={index}
            value={each?.value}
            control={<Radio />}
            label={each?.name}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CommonRadio;
