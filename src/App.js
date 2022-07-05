import React from "react";
import "./App.css";
import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";

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

function App() {
  const currentYear = new Date().getFullYear();
  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );
  const yearList = range(currentYear, currentYear - 100, -1);
  const [radioGender, setRadioGender] = React.useState(null);

  return (
    <div className="App">
      <Card>
        <Card.Body className="pb-5">
          <h5 className="card-title">My Profile</h5>
          <p className="card-description">Manage your profile information</p>

          <hr />

          <Container className="mt-5">
            <Row>
              {/* Form layout */}
              <Col lg={8}>
                {/* Input Name */}
                <Row className="mb-3">
                  <Col lg={3}>
                    <p className="text-right mt-2 text-label">Name</p>
                  </Col>
                  <Col lg={8}>
                    <Form.Control size="lg" type="text" />
                  </Col>
                </Row>

                {/* Input Name */}
                <Row className="mb-3">
                  <Col lg={3}>
                    <p className="text-right mt-2 text-label">Email</p>
                  </Col>
                  <Col lg={8}>
                    <Form.Control size="lg" type="text" />
                  </Col>
                </Row>

                {/* Input Name */}
                <Row className="mb-3">
                  <Col lg={3}>
                    <p className="text-right mt-2 text-label">Phone Number</p>
                  </Col>
                  <Col lg={8}>
                    <Form.Control size="lg" type="text" />
                  </Col>
                </Row>

                {/* Input Gender */}
                <Form>
                  <Row className="mb-2">
                    <Col lg={3}>
                      <p className="text-right text-label">Gender</p>
                    </Col>
                    <Col lg={2}>
                      <Form.Check
                        type="radio"
                        label="Laki-laki"
                        id="checkbox-laki-laki"
                        name="group1"
                        checked={radioGender === 1 ? true : false}
                        onClick={() => setRadioGender(1)}
                      />
                    </Col>
                    <Col lg={4}>
                      <Form.Check
                        type="radio"
                        label="Perempuan"
                        id="checkbox-perempuan"
                        name="group2"
                        checked={radioGender === 2 ? true : false}
                        onClick={() => setRadioGender(2)}
                      />
                    </Col>
                  </Row>
                </Form>

                <Row className="mb-3">
                  <Col lg={3}>
                    <p className="text-right mt-2 text-label">Gender</p>
                  </Col>
                  <Col lg={2}>
                    <Form.Select size="lg">
                      {[...Array(31)].map((item, index) => (
                        <option>{++index}</option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col lg={3}>
                    <Form.Select size="lg">
                      {monthNames.map((item) => (
                        <option>{item}</option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col lg={3}>
                    <Form.Select size="lg">
                      {yearList.map((item) => (
                        <option>{item}</option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={{ span: 3, offset: 3 }}>
                    <Button variant="danger btn-rounded px-4">Save</Button>
                  </Col>
                </Row>
              </Col>

              {/* Photo Profile */}
              <Col lg={4} className="border-left">
                <div className="flex-center-horizontal">
                  <img
                    src="https://translationmonster.com/wp-content/uploads/2017/08/Female_dummy_image.jpg"
                    alt="profile"
                    className="photo-profile"
                  />
                </div>

                <div className="flex-center-horizontal mt-4">
                  <Button
                    variant="outline-secondary"
                    className="btn-rounded px-4"
                  >
                    Select image
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
