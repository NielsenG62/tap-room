import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewKegForm(props) {
  function handleNewListSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      kegName: event.target.kegName.value,
      kegBrand: event.target.kegBrand.value,
      kegType: event.target.kegType.value,
      kegIBU: event.target.kegIBU.value,
      kegAlcContent: event.target.kegAlcContent.value,
      kegPrice: event.target.kegPrice.value,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <h3>Form</h3>
      <form onSubmit={handleNewListSubmission}>
        <input type="text" name="kegName" placeholder="Beer Name" />
        <input type="text" name="kegBrand" placeholder="Beer Brand" />
        <input type="text" name="kegType" placeholder="Beer Type" />
        <input type="text" name="kegIBU" placeholder="IBUs" />
        <input type="text" name="kegAlcContent" placeholder="ABV" />
        <input type="integer" name="kegPrice" placeholder="Price Per Pint" />
        <button type="submit">Submit Form</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.PropTpyes = {
  onNewKegCreation: PropTypes.func,
};

export default NewKegForm;
