import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

// components
import CardImage from "../components/molecules/CardImage";
import Navbar from "../components/molecules/Navbar";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  const [listPhoto, setListPhoto] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState([]);

  React.useEffect(() => {
    if (!props?.authData?.token) {
      navigate("/login");
    }
  }, []);

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setListPhoto(res.data);

      setTimeout(() => {
        setIsLoading(false);
      }, 10000);
    });
  }, []);

  return (
    <>
      <div className="mb-5">
        <Navbar />
      </div>

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
    </>
  );
}

const mapStateToProps = (state) => ({
  authData: state?.auth,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
