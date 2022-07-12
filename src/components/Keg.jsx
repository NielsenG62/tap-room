import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

class Keg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.pintCount,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="kegDiv">
          <div onClick={() => this.props.whenKegClicked(this.props.id)}>
            <h2>{this.props.kegName}</h2>
            <h3>{this.props.kegBrand}</h3>
            <p>${this.props.kegPrice}</p>
          </div>
          <Button
            variant="warning"
            onClick={() => this.props.decrement(this.props.id)}
            className="counter"
          >
            Pour a pint
          </Button>
          <p>Pints Left: {this.props.pintCount}</p>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

Keg.propTypes = {
  kegName: PropTypes.string,
  kegBrand: PropTypes.string,
  kegType: PropTypes.string,
  kegIBU: PropTypes.number,
  kegAlcContent: PropTypes.number,
  kegPrice: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  pintCount: PropTypes.number,
  decrement: PropTypes.func,
};

export default Keg;
