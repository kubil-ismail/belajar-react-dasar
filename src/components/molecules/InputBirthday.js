import React from "react";

import { Row, Col } from "react-bootstrap";
import InputSelect from "../atoms/InputSelect";

var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentYear = new Date().getFullYear();
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
const yearList = range(currentYear, currentYear - 100, -1);

function InputBirthday() {
  return (
    <>
      <Row className="mb-3">
        <Col lg={3}>
          <p className="text-right mt-2 text-label">Birthday</p>
        </Col>
        <Col lg={2}>
          <InputSelect list={[...Array(31)]?.map((item, index) => ++index)} />
        </Col>
        <Col lg={3}>
          <InputSelect list={monthNames} />
        </Col>
        <Col lg={3}>
          <InputSelect list={yearList} />
        </Col>
      </Row>
    </>
  );
}

export default InputBirthday;
