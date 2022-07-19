import React from "react";
import { Row, Col, Form } from "react-bootstrap";

function InputText(props) {
  const { label: labelInput } = props;

  return (
    <>
      <Row className="mb-3">
        <Col lg={3}>
          <p className="text-right mt-2 text-label">{labelInput}</p>
        </Col>
        <Col lg={8}>
          <Form.Control size="lg" type="text" />
        </Col>
      </Row>
    </>
  );
}

export default InputText;
