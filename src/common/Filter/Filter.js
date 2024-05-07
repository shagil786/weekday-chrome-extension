import { makeStyles } from "@material-ui/core";
import React from "react";
import ChooseComponent from "./Common/ChooseComponent/ChooseComponent";
import { filters } from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
  },
}));

const Filter = ({ store }) => {
  const classes = useStyles();
  return (
    <div className={classes?.root}>
      {filters?.map((each, index) => (
        <ChooseComponent
          data={each}
          store={store}
          key={index}
          choice={each?.type}
        />
      ))}
    </div>
  );
};

export default Filter;
