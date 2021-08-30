import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: 0,
    };
  }

  increaseFavorites = () => {
    this.setState({
      favorites: this.state.favorites + 1,
    });
    console.log(this.state.favorites);
  };

  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.imageURL} onClick={this.increaseFavorites} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>Favorites❤️: {this.state.favorites}</Card.Text>
            <Button variant="primary">A very useful button!</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeast;
