import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import "./App.css";
import Data from "./assets/data.json";
import SelectedBeast from "./components/SelectedBeast";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: false,
      img: '',
      name: '',
      desc: '',
    };
  }

  showSelectedBeast = (imgUrl, _name, description) => {
    this.setState({
      show: true,
      img: imgUrl,
      name: _name,
      desc: description,
    });
  };
  hideSelectedBeast = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    return (
      <>
        <Header />
        <Main dataFile={Data} showModal={this.showSelectedBeast} />
        <SelectedBeast hideModal={this.hideSelectedBeast} show={this.state.show} img={this.state.img} name={this.state.name} desc={this.state.desc}/>
        <Footer />
      </>
    );
  }
}

export default App;
