import React from "react";

// atoms
import InputText from "../atoms/InputText";

// molecules
import InputGender from "../molecules/InputGender";
import InputBirthday from "../molecules/InputBirthday";

import { Row, Col, Button } from "react-bootstrap";

function FormProfile() {
  return (
    <>
      {/* Input Name */}
      <InputText label="Fullname" />

      {/* Input Email */}
      <InputText label="Email" />

      {/* Input Phone */}
      <InputText label="Phone Number" />

      {/* Input Gender */}
      <InputGender />

      {/* Input Birthday */}
      <InputBirthday />

      <Row className="mb-3">
        <Col lg={{ span: 3, offset: 3 }}>
          <Button variant="danger btn-rounded px-4">Save</Button>
        </Col>
      </Row>
    </>
  );
}

export default FormProfile;
