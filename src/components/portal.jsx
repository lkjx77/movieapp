import React, { Component } from "react";
import Header from "./header";
import Contents from "./contents";

class Portal extends Component {

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
