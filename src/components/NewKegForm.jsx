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
      kegIBU: event.target.kegIBU.valueAsNumber,
      kegAlcContent: event.target.kegAlcContent.valueAsNumber,
      kegPrice: event.target.kegPrice.valueAsNumber,
      pintCount: 124,
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
        <input type="number" name="kegIBU" placeholder="IBUs" required />
        <input type="number" name="kegAlcContent" placeholder="ABV" required />
        <input
          type="number"
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
