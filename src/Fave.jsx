import React, { Component } from "react";

export default class Fave extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClick(e) {
    e.stopPropagation();
    console.log("Handling Fave click!");

    // Add this line. You'll call the function passed through props
    this.props.onFaveToggle();

    // Delete the `setState` line. You no longer track state here
    // this.setState({isFave: !this.state.isFave})
  }

  // handleClick(e) {
  //   this.setState({
  //     isFave: !this.state.isFave,
  //   });
  //   console.log("Handle Click executed");
  //   e.stopPropagation();
  // }

  render() {
    const isFave = this.props.isFave ? "remove_from_queue" : "add_to_queue";
    return (
      <div className={`film-list-filter ${isFave}`}>
        <p
          onClick={(e) => this.handleClick(e)}
          className={`material-icons ${isFave}`}
        >
          {isFave}
        </p>
      </div>
    );
  }
}
