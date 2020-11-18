import React, { Component } from "react";
import "../game/game.css";
import gameBlock from "../data/gameBlocks.json";
import Board from "../game/board.jsx";

class game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStartedFlag: false,
    };
  }
  onGameStart = () => {
    this.setState({ gameStartedFlag: true });
  };
  startGame = () => {
    gameBlock.forEach((element) => {
      console.log(element);
    });
  };
  firstPersonName = (event) => {
    this.setState({ firstPersonName: event.target.value });
  };
  secondPersonName = (event) => {
    this.setState({ secondPersonName: event.target.value });
  };
  render() {
    if (!this.state.gameStartedFlag) {
      return (
        <div className="centered">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon">
                <i className="fa fa-user prefix"></i>
              </span>
            </div>
            <h1>Please Enter Name</h1>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              aria-label="Enter Name"
              aria-describedby="basic-addon"
              onChange={this.firstPersonName}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              aria-label="Enter Name"
              aria-describedby="basic-addon"
              onChange={this.secondPersonName}
            />
            <br></br>
            <br></br>
            <button className="curve-icon" onClick={this.onGameStart}>
              SUBMIT
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <Board
            firstPersonName={this.state.firstPersonName}
            secondPersonName={this.state.secondPersonName}
          ></Board>
        </React.Fragment>
      );
    }
  }
}

export default game;
