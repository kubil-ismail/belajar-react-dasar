import React from "react";
import { Form } from "react-bootstrap";

function InputSelect(props) {
  const { list } = props;
  return (
    <>
      <Form.Select size="lg">
        {list.map((item) => (
          <option>{item}</option>
        ))}
      </Form.Select>
    </>
  );
}

export default InputSelect;
