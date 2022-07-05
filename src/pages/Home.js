import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

// components
import CardImage from "../components/molecules/CardImage";

function Home() {
  const [listPhoto, setListPhoto] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setListPhoto(res.data);

      setTimeout(() => {
        setIsLoading(false);
      }, 10000);
    });
  }, []);

  return (
    <Container>
      <Row>
        {/* CONDITIONAL RENDERING */}
        {isLoading ? (
          <>
            {[...Array(6)]?.map(() => (
              <Col lg={4}>
                <CardImage
                  image={
                    "https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif"
                  }
                />
              </Col>
            ))}
          </>
        ) : (
          <>
            {listPhoto?.map((item) => (
              <Col lg={4}>
                <CardImage image={item?.url} title={item?.title} />
              </Col>
            ))}
          </>
        )}
      </Row>
    </Container>
  );
}

export default Home;
