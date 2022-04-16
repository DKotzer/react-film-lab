import React, { Component } from "react";

// export default class FilmPoster extends Component {
//   render() {
//     return (
//       <div>
//         <img src={this.props.posterurl} alt='' />
//       </div>
//     );
//   }
// }

export default function FilmPoster(props) {
  return <img src={props.posterurl} alt='' />;
}
