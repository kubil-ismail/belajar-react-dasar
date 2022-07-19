import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Logout() {
  React.useEffect(() => {
    setTimeout(() => {
      localStorage.clear();
      window.location.href = "/login";
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

export default Logout;
