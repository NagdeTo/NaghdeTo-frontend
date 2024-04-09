import React from "react";
import { Input } from "antd";

const NumericInput = (props) => {
  const { value, onChange } = props;

  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?[\d\u06F0-\u06F9]*(\.[\d\u06F0-\u06F9]*)?$/;
    if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
      onChange(inputValue);
    }
  };

  const handleBlur = () => {
    let valueTemp = value;
    if (valueTemp.charAt(valueTemp.length - 1) === "." || valueTemp === "-") {
      valueTemp = valueTemp.slice(0, -1);
    }
    onChange(valueTemp.replace(/^0*([\d\u06F0-\u06F9]+)/, "$1"));
  };

  return (
    <Input
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      maxLength={25}
    />
  );
};

export default NumericInput;
