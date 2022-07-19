import React from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import { auth, providerGoogle, providerFacebook } from "../firebase";

function Login() {
  const [isError, setIsError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);

  const handleLogin = (props) => {
    setIsLoading(true);

    console.log({
      email: props?.email ?? email,
      password: props?.password ?? password,
    });

    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, {
        email: props?.email ?? email,
        password: props?.password ?? password,
      })
      .then((res) => {
        setIsError(false);

        // SET TOKEN
        localStorage.setItem("token", res?.data?.token);
        localStorage.setItem("user", JSON.stringify(res?.data?.user));
        // BEFORE INSERT IN REDUX

        props.setProfile(res?.data?.user);

        window.location.href = "/";
      })
      .catch((err) => {
        setIsError(true);
        setErrorMsg(err?.response?.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleRegister = (props) => {
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/add`, {
        email: props?.email,
        password: props?.password,
        name: props?.name,
        job: "-",
        education: "-",
        photo: props?.photo,
      })
      .then((res) => {
        setIsError(false);

        handleLogin({
          email: props.email,
          password: props.password,
        });
      })
      .catch((err) => {
        setIsError(true);
        setErrorMsg(err?.response?.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLoginGoogle = () => {
    auth.signInWithPopup(providerGoogle).then((res) => {
      if (res?.additionalUserInfo?.isNewUser) {
        handleRegister({
          email: res?.additionalUserInfo?.profile?.email,
          password: res?.additionalUserInfo?.profile?.id,
          name: res?.additionalUserInfo?.profile?.name,
          photo: res?.additionalUserInfo?.profile?.picture,
        });
      } else {
        handleLogin({
          email: res?.additionalUserInfo?.profile?.email,
          password: res?.additionalUserInfo?.profile?.id,
        });
      }
    });
  };

  const handleLoginFacebook = () => {
    auth.signInWithPopup(providerFacebook).then((res) => {
      if (res?.additionalUserInfo?.isNewUser) {
        handleRegister({
          email: res?.additionalUserInfo?.profile?.email,
          password: res?.additionalUserInfo?.profile?.id,
          name: res?.additionalUserInfo?.profile?.name,
          photo: res?.additionalUserInfo?.profile?.picture?.data?.url,
        });
      } else {
        handleLogin({
          email: res?.additionalUserInfo?.profile?.email,
          password: res?.additionalUserInfo?.profile?.id,
        });
      }
    });
  };

  return (
    <Row className="justify-content-md-center flex-center-vertical h-100">
      <Col lg={4}>
        {isError ? <Alert variant="danger">{errorMsg}</Alert> : null}

        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              type="submit"
              disabled={isLoading}
              onClick={handleLogin}
            >
              {isLoading ? "Loading..." : "Login"}
            </Button>
          </div>

          <p className="text-center my-2">Or</p>
          {/* Google */}
          <div className="d-grid gap-2 mb-2">
            <Button
              variant="outline-danger"
              type="submit"
              disabled={isLoading}
              onClick={handleLoginGoogle}
            >
              Connect with Google
            </Button>
          </div>

          {/* Facebook */}
          <div className="d-grid gap-2">
            <Button
              variant="outline-primary"
              type="submit"
              disabled={isLoading}
              onClick={handleLoginFacebook}
            >
              Connect with Facebook
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => ({
  authData: state,
});

const mapDispatchToProps = (dispatch) => ({
  setProfile: (data) => dispatch({ type: "SET_PROFILE", data: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
