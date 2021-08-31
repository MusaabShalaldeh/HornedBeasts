import React from "react";
import HornedBeast from "./HornedBeasts";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  render() {
    return (
      <>
        <main>
          <Row xs={1} md={4} className="g-4">
            {this.props.dataFile.map((item) => {
              return (
                <HornedBeast
                  title={item.title}
                  imageURL={item.image_url}
                  description={item.description}
                  showModal = {this.props.showModal}
                />
              );
            })}
          </Row>
        </main>
      </>
    );
  }
}

export default Main;
