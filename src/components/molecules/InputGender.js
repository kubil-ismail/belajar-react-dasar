import React from "react";
import RadioButton from "../atoms/RadioButton";
import { Row, Col, Form } from "react-bootstrap";

function InputGender() {
  const [radioGender, setRadioGender] = React.useState(null);

  return (
    <Form>
      <Row className="mb-2">
        <Col lg={3}>
          <p className="text-right text-label">Gender</p>
        </Col>
        <Col lg={2}>
          <RadioButton
            label="Laki-laki"
            id="radio-laki-laki"
            name="radio-1"
            checked={radioGender === 1 ? true : false}
            onClick={() => {
              setRadioGender(1);
            }}
          />
        </Col>
        <Col lg={4}>
          <RadioButton
            label="Perempuan"
            id="radio-perempuan"
            name="radio-2"
            checked={radioGender === 2 ? true : false}
            onClick={() => {
              setRadioGender(2);
            }}
          />
        </Col>
      </Row>
    </Form>
  );
}

export default InputGender;
