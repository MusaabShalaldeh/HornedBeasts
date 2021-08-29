import React from "react";

class HornedBeast extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div>
          <h2>{this.props.title}</h2>
          <img src={`${this.props.imageURL}`} alt="" title="" width="256" height="256" />
          <p>{this.props.description}</p>
        </div>
      </>
    );
  }
}

export default HornedBeast;
