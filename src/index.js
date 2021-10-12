import React from "react";
import ReactDOM from "react-dom";
//import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lattitude: null, errorMessage: "" };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lattitude: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.lattitude) {
      return <div>Error : {this.state.errorMessage}</div>;
    }
    if (this.state.lattitude && !this.state.errorMessage) {
      return <div>Latitutde : {this.state.lattitude}</div>;
    }

    return <div>Loading Content....</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
