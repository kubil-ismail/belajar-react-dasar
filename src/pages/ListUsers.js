import React from "react";
import axios from "axios";
import { Container, Row, Table } from "react-bootstrap";

// components
import Navbar from "../components/molecules/Navbar";

function Home(props) {
  const [listUsers, setListUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState([]);

  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
  }, []);

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/users`).then((res) => {
      setListUsers(res?.data?.data ?? []);
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
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Fullname</th>
                  <th>Education</th>
                  <th>Job Title</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <>
                    <tr>
                      <td colSpan={4}>
                        <p className="text-center">Loading...</p>
                      </td>
                    </tr>
                  </>
                ) : (
                  <>
                    {listUsers?.map((item) => (
                      <tr>
                        <td>{item?.id}</td>
                        <td>{item?.name}</td>
                        <td>{item?.education}</td>
                        <td>{item?.job_title}</td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </Table>
          </>
        </Row>
      </Container>
    </>
  );
}

export default Home;
