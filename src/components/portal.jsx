import React, { Component } from "react";
import Header from "./header";
import Contents from "./contents";

class Portal extends Component {
  state = {
    showModal: false
  };
  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <Header />
        <Contents />
      </div>
    );
  }
}

export default Portal;
