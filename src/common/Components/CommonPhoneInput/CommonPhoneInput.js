import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import "./CommonPhoneInput.css";
import formatNumber from "react-intl-tel-input/dist/components/utils";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "100%",
    border: "1px solid rgb(85, 185, 98)",
    backgroundColor: "rgb(211, 248, 238)",
    borderRadius: 5,
    padding: "5px 8px",
    fontSize: 15,
  },
}));

const CommonPhoneInput = ({ data, store }) => {
  const handleChange = (isValid, value, countryData) => {
    if (!/^\d+$/.test(value) && value?.length > 1) return;
    store.onChange({
      name: data?.store,
      value: {
        dialCode: countryData?.dialCode,
        value,
      },
    });
  };
  const classes = useStyles();
  return (
    <IntlTelInput
      telInputProps={{
        maxLength: 10,
      }}
      inputClassName={classes?.input}
      {...data}
      onPhoneNumberChange={handleChange}
      defaultCountry="in"
      type="tel"
      value={store?.value?.[data?.store]?.value ?? ""}
    />
  );
};

export default CommonPhoneInput;
