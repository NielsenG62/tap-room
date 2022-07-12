import React from "react";
import KegDetail from "./KegDetail";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import Button from "react-bootstrap/Button";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null,
    };
  }

  decrement = (id) => {
    const selectedKeg = this.state.mainKegList.filter(
      (keg) => keg.id === id
    )[0];
    if (selectedKeg.pintCount > 0) {
      const newCount = (selectedKeg.pintCount = selectedKeg.pintCount -= 1);
      selectedKeg.setState({ count: newCount });
    }
  };

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddingKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList: newMainKegList,
      formVisibleOnPage: false,
    });
  };

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(
      (keg) => keg.id === id
    )[0];
    this.setState({ selectedKeg: selectedKeg });
  };

  render() {
    console.log(this.state);
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} />;
      buttonText = "Return to keg list";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewKegForm onNewKegCreation={this.handleAddingKegToList} />
      );
      buttonText = "Return to keg list";
    } else {
      currentlyVisibleState = (
        <KegList
          kegList={this.state.mainKegList}
          onKegSelection={this.handleChangingSelectedKeg}
          decrement={this.decrement}
        />
      );
      buttonText = "Add a keg to the list";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant="info" onClick={this.handleClick}>
          {buttonText}
        </Button>
      </React.Fragment>
    );
  }
}

export default KegControl;
