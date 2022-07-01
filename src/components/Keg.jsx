import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h2>{props.kegName}</h2>
        <h3>{props.kegBrand}</h3>
        <p>
          {props.kegType} | {props.kegIBU} IBU | {props.kegAlcContent}% ABV
        </p>
        <p>${props.kegPrice}</p>
        <hr />
      </div>
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
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
};

export default Keg;
