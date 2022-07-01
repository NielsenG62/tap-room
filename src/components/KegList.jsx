import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg) => (
        <Keg
          whenListClicked={props.onListSelection}
          kegName={keg.kegName}
          kegBrand={keg.kegBrand}
          kegType={keg.kegType}
          kegIBU={keg.kegIBU}
          kegAlcContent={keg.kegAlcContent}
          kegPrice={keg.kegPrice}
          id={keg.id}
          key={keg.id}
        />
      ))}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
};
