import React from "react";
import axios from "axios";
import Modal from "react-modal";
import Collections from "./collections";
import PlayList from "./playList";
const uuidv4 = require("uuid/v4");

Modal.setAppElement("#root");

class Contents extends React.Component {
  state = {
    items: [],
    history: [],
    loaded: false
  };

  showPrev = () => {
    const sizeOfEntry = this.state.items.length;
    let dispFlag = sizeOfEntry > 5 ? true : false;
    if (dispFlag) {
      let newCollection = [];
      const showedItems = this.state.items.splice(0, sizeOfEntry - 5);
      const remaindItems = this.state.items;
      newCollection = [...remaindItems, ...showedItems];
      this.setState({
        items: newCollection
      });
    }
  };

  showNext = () => {
    let dispFlag = this.state.items.length > 5 ? true : false;
    if (dispFlag) {
      let newCollection = [];
      const showedItems = this.state.items.splice(0, 5);
      const remaindItems = this.state.items;
      newCollection = [...remaindItems, ...showedItems];
      this.setState({
        items: newCollection
      });
    }
  };

  showPrevPlayList = () => {
    const sizeOfEntry = this.state.history.length;
    let dispFlag = sizeOfEntry > 5 ? true : false;
    if (dispFlag) {
      let newCollection = [];
      const showedItems = this.state.history.splice(0, sizeOfEntry - 5);
      const remaindItems = this.state.history;
      newCollection = [...remaindItems, ...showedItems];
      this.setState({
        history: newCollection
      });
    }
  };

  showNextPlayList = () => {
    let dispFlag = this.state.history.length > 5 ? true : false;
    if (dispFlag) {
      let newCollection = [];
      const showedItems = this.state.history.splice(0, 5);
      const remaindItems = this.state.history;
      newCollection = [...remaindItems, ...showedItems];
      this.setState({
        history: newCollection
      });
    }
  };

  componentDidMount = () => {
    axios.get(`https://demo2697834.mockable.io/movies`).then(res => {
      const allItems = res.data;
      allItems.entries.forEach(item => (item.id = uuidv4()));
      this.setState({ loaded: true, items: allItems.entries });
    });
  };

  handleImgOnClick = item => {
    this.setState({
      history: [item.data, ...this.state.history]
    });
  };

  renderMovieItems = () => {
    let allItems = this.state.loaded ? (
      this.state.items.map(item => (
        <Collections
          onClickImg={this.handleImgOnClick}
          playVideo={this.playVideo}
          key={item.id}
          item={item}
        />
      ))
    ) : (
      <div />
    );
    return allItems;
  };

  renderPlayList = () => {
    let allItems =
      this.state.history.length > 0 ? (
        this.state.history.map(item => (
          <PlayList key={item.id} item={item} playVideo={this.playVideo} />
        ))
      ) : (
        <div />
      );
    return allItems;
  };

  render() {
    return (
      <section>
        <section id="boxes">
          <h2>New Collections</h2>
          <div id="collections" className="scrolling-wrapper">
            {this.renderMovieItems()}
          </div>
        </section>
        <section className="">
          <nav aria-label="Page navigation example">
            <ul className="pagination pagination-lg justify-content-center">
              <li className="page-item">
                <a
                  className="page-link"
                  href="#collections"
                  aria-label="Previous"
                  onClick={() => this.showNext()}
                >
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#collections"
                  aria-label="Next"
                  onClick={() => this.showPrev()}
                >
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section id="history">
          <h2>Play List</h2>
          <div id="playlist" className="scrolling-wrapper">
            {this.renderPlayList()}
          </div>
        </section>
        <section className="">
          <nav aria-label="Page navigation example">
            <ul className="pagination pagination-lg justify-content-center">
              <li className="page-item">
                <a
                  className="page-link m-2"
                  href="#playlist"
                  aria-label="Previous"
                  onClick={() => this.showNextPlayList()}
                >
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link m-2"
                  href="#playlist"
                  aria-label="Next"
                  onClick={() => this.showNextPlayList()}
                >
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </section>
    );
  }
}

export default Contents;
