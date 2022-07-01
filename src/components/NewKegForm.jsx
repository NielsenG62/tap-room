import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

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
        <input type="text" name="kegName" placeholder="Beer Name" required />
        <input type="text" name="kegBrand" placeholder="Beer Brand" required />
        <input type="text" name="kegType" placeholder="Beer Type" required />
        <input type="text" name="kegIBU" placeholder="IBUs" required />
        <input type="text" name="kegAlcContent" placeholder="ABV" required />
        <input
          type="text"
          name="kegPrice"
          placeholder="Price Per Pint"
          required
        />
        <Button variant="success" type="submit">
          Submit Form
        </Button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.PropTpyes = {
  onNewKegCreation: PropTypes.func,
};

export default NewKegForm;
