import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

// molecules
import SelectProfile from "../components/molecules/SelectProfile";
import FormHeader from "../components/molecules/FormHeader";

// organisms
import FormProfile from "../components/organisms/FormProfile";

function App() {
  return (
    <div className="App">
      <Card>
        <Card.Body className="pb-5">
          <FormHeader
            title="My Profile"
            desc="Manage your profile information"
          />

          <Container className="mt-5">
            <Row>
              {/* Form layout */}
              <Col lg={8}>
                <FormProfile />
              </Col>

              {/* Photo Profile */}
              <Col lg={4} className="border-left">
                <SelectProfile />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
