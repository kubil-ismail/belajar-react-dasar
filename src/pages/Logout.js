import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Logout(props) {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      props.setLogout();
      navigate("/login");
    }, 2000);
  }, []);

  return (
    <div className="h-100 flex-center-horizontal flex-center-vertical">
      <div>
        <div className="flex-center-horizontal mb-4">
          <Spinner animation="border" variant="primary" />
        </div>
        <h4>Please wait...</h4>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  authData: state?.auth,
});

const mapDispatchToProps = (dispatch) => ({
  setLogout: () => dispatch({ type: "SET_LOGOUT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
