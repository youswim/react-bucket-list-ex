import React from "react";
import "./App.css";
import "./style.css";
import Start from './Start';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: "양금"
    };
  }
  render(){
    return (
      <div className="App">
        <Start name={this.state.name}/>
      </div>
    )
  }
}

export default App;