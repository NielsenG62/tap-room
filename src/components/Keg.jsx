import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <h2>{props.kegName}</h2>
      <h3>{props.kegBrand}</h3>
      <p>
        {props.kegType} | {props.kegIBU} IBU | {props.kegAlcContent}% ABV
      </p>
      <p>${props.kegPrice}</p>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  kegName: PropTypes.string,
  kegBrand: PropTypes.string,
  kegType: PropTypes.string,
  kegIBU: PropTypes.integer,
  kegAlcContent: PropTypes.integer,
  kegPrice: PropTypes.integer,
};

export default Keg;
