import React, { Component } from "react";

export default class Fave extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFave: false,
    };
  }

  handleClick(e) {
    this.setState({
      isFave: !this.state.isFave,
    });
    console.log("Handle Click executed");
    e.stopPropagation();
  }

  render() {
    const isFave = this.state.isFave ? "remove_from_queue" : "add_to_queue";
    return (
      <div className={isFave, "film-row-fave"}>
        <p onClick={(e) => this.handleClick(e)} className='material-icons'>
          {isFave}
        </p>
      </div>
    );
  }
}
