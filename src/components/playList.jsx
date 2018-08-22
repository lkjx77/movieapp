import React, { Component } from "react";
import Modal from "react-modal";

class PlayList extends Component {
  state = {
    showModal: false
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  playVideo = () => {
    if (this.refs.vidRef.paused) {
      this.refs.vidRef.play();
    } else {
      this.refs.vidRef.pause();
    }
  };

  render() {
    return (
      <div className="box" key={this.props.item.id}>
        <img
          src={this.props.item.images[0].url}
          alt={this.props.item.id}
          onClick={() => this.handleOpenModal()}
        />
        <p>{this.props.item.title}</p>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={false}
        >
          <section>
            <div className="container">
              <p>{this.props.item.title}</p>
              <button
                className="btn btn-primary m-2"
                onClick={this.handleCloseModal}
              >
                Close
              </button>
              <button className="btn btn-primary m-2" onClick={this.playVideo}>
                Play
              </button>
            </div>
          </section>
          <section>
            <div className="container">
              <video
                ref="vidRef"
                src={this.props.item.contents[0].url}
                type="video/mp4"
              />
            </div>
          </section>
        </Modal>
      </div>
    );
  }
}

export default PlayList;
