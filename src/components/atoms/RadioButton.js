import React from "react";
import { Form } from "react-bootstrap";

function RadioButton(props) {
  const { label: labelInput, id, name, checked, onClick } = props;

  return (
    <>
      <Form.Check
        type="radio"
        label={labelInput}
        id={id}
        name={name}
        checked={checked}
        onClick={onClick}
      />
    </>
  );
}

export default RadioButton;
