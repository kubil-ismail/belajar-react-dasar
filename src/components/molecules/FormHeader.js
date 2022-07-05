import React from "react";
import PropTypes from "prop-types";

function FormHeader(props) {
  const { title, desc } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-description">{desc}</p>
      <hr />
    </>
  );
}

FormHeader.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

FormHeader.defaultProps = {
  title: "Unknown title",
  desc: "Unknown description",
};

export default FormHeader;
