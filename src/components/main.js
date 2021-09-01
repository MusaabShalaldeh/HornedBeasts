import React from "react";
import HornedBeast from "./HornedBeasts";
import Row from "react-bootstrap/Row";
import FormClass from "./formClass";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterVal: 0,
    };
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      filterVal: parseInt(event.target.value),
    });
  };

  render() {
    return (
      <>
        <main>
          <FormClass handleChange={this.handleChange} />
          <br />
          <Row xs={1} md={4} className="g-4">
            {this.props.dataFile.map((item) => {
              if (this.state.filterVal === 0) {
                return (
                  <HornedBeast
                    title={item.title}
                    imageURL={item.image_url}
                    description={item.description}
                    showModal={this.props.showModal}
                    horns={item.horns}
                  />
                );
              } else if(parseInt(item.horns) === this.state.filterVal) {
                return (
                  <HornedBeast
                    title={item.title}
                    imageURL={item.image_url}
                    description={item.description}
                    showModal={this.props.showModal}
                    horns={item.horns}
                  />
                );
              }
            })}
          </Row>
        </main>
      </>
    );
  }
}

export default Main;
