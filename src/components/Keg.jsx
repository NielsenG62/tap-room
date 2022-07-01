import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

class Keg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 124,
    };
  }

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

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
            onClick={this.decrement}
            className="counter"
          >
            Pour a pint
          </Button>
          <p>Pints Left: {this.state.count}</p>
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
  kegIBU: PropTypes.string,
  kegAlcContent: PropTypes.string,
  kegPrice: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
};

export default Keg;
