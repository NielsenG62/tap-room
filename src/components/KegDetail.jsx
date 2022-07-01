import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;
  return (
    <React.Fragment>
      <h2>Keg Details</h2>
      <h3>{keg.kegName}</h3>
      <h3>{keg.kegBrand}</h3>
      <p>
        {keg.kegType} | {keg.kegIBU} IBU | {keg.kegAlcContent}% ABV
      </p>
      <p>${keg.kegPrice}</p>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
};

export default KegDetail;
