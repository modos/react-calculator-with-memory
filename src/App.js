import React from "react";

import Keypad from "./components/Keypad";
import Screen from "./components/Screen";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenText: "0",
      x: "",
      y: "",
      operator: "",
      memory: [],
      memoryTemp: [],
      oldItemMemoryIndex: undefined,
      oldItemMemoryValue: undefined
    };
  }
  handlePressDigit = (digit) => {
    if (this.state.operator === ""){
      let temp = this.state.x + digit;
      this.setState({x: temp});
      this.setState({screenText: temp});
    }else {
      let temp = this.state.y + digit;
      this.setState({y: temp});
      this.setState({screenText: temp});
    }

  };
  handlePressOperator = (operator) => {
     if (this.state.operator !== "" && this.state.x !== "" && this.state.y !== ""){
       let result = eval(this.state.x + this.state.operator + this.state.y);
       this.setState({x: result});
       this.setState({y: ""});
       this.setState({screenText: result});
     }

     this.setState({operator: operator});
  };
  handlePressAC = () => {
    this.setState({screenText: "0"});
    this.setState({x: ""});
    this.setState({y: ""});
    this.setState({operator: ""});
  };
  handlePressDot = () => {
   let end = this.state.screenText.toString().indexOf(".");
   console.log(end);
   if (end < 1){
    if (this.state.operator === "" || this.state.y === ""){
      let temp =  this.state.x + ".";
      this.setState({x: temp});
      this.setState({screenText: temp});
    }else {
      let temp = this.state.y + ".";
      this.setState({y: temp});
      this.setState({screenText: temp});
    }
   }
  };
  handlePressNegator = () => {
    if (this.state.operator === "" || this.state.y === ""){
      let temp = -1 * this.state.x;
      this.setState({x: temp});
      this.setState({screenText: temp});
    }else {
      let temp = -1 * this.state.y;
      this.setState({y: temp});
      this.setState({screenText: temp});
    }
  };
  handlePressResult = () => {
    if (this.state.x !== "" && this.state.y !== ""){
      let res = eval(this.state.x + this.state.operator + this.state.y);
    this.setState({x: res});
    this.setState({y: ""});
    this.setState({screenText: res});
    }
  };

  onPressMC = () => {
    this.setState({memory: []});
    this.setState({memoryTemp: []});
  };

  onPressMR = () => {
    this.setState({screenText: this.state.memory[this.state.memory.length - 1]});
    this.setState({x: this.state.memory[this.state.memory.length - 1]});
  };

  onPressMS = () => {
    let temp = this.state.memory;
    let oldtemp = this.state.memoryTemp;
    temp.push(parseFloat(this.state.screenText));
    oldtemp.push(parseFloat(this.state.screenText));
    this.setState({memory: temp});
    this.setState({memoryTemp: oldtemp});
  };

  onPressMneg = () => {
    let temp = this.state.memory;
    let oldtemp = this.state.memory;
    temp[temp.length - 1] = temp[temp.length - 1] - this.state.screenText;
    this.setState({memory: temp});
  };

  onPressMplus = () => {
    let temp = this.state.memory;
    temp[temp.length - 1] = parseFloat(temp[temp.length - 1]) + parseFloat(this.state.screenText);
    this.setState({memory: temp});
  };

  mp = (e) => {
    let tempmem = this.state.memory;
    let tempoldmem = this.state.memoryTemp;

    tempmem[e] += tempoldmem[e];

    this.setState({memory: tempmem});
  };

  mm = (e) => {
    let tempmem = this.state.memory;
    let tempoldmem = this.state.memoryTemp;

    tempmem[e] -= tempoldmem[e];

    this.setState({memory: tempmem});
  };

  mc = (e) => {
    let temp = this.state.memory;
    let oldtemp = this.state.memoryTemp;
    temp.splice(e, 1);
    oldtemp.splice(e, 1);

    this.setState({memory: temp});
    this.setState({memoryTemp: oldtemp});
  };
  
  onItemMemoryClick = (e) => {
    let temp = this.state.memory[e];
    this.setState({screenText: temp});
    
    if (this.state.operator === ""){
      this.setState({x: temp});
    }else {
      this.setState({y: temp});
    }
  };

  render() {
    let res = [];
    for (let index = 0; index < this.state.memory.length; index++) {
      res.push((<div className ="mem-item">
      <div className="mem-item-number" onClick={() => {this.onItemMemoryClick(index)}}>
            {this.state.memory[index]}
      </div>

      <div className="mem-item-buttons">
          <button onClick={() => {this.mc(index)}}>MC</button>
          <button onClick={() => {this.mp(index)}}>M+</button>
          <button onClick={() => {this.mm(index)}}>M-</button>
      </div>
  </div>));
      
    }
    return (
      <div className="main">
        <p>*** For Reading Number From Memory, Click on the Number in the Item of Memoy ( not whole item ) ***</p>
        <Screen text={this.state.screenText} />
        {/* <Memory items={[1, 2, 3, 4, 5, 6, 7]} mp={this.mp} mc={this.mc} mm={this.mm}/> */}
        <div className="memory">
          {res}
        </div>
        <Keypad
          onPressDigit={this.handlePressDigit}
          onPressOperator={this.handlePressOperator}
          onPressAC={this.handlePressAC}
          onPressDot={this.handlePressDot}
          onPressNegator={this.handlePressNegator}
          onPressResult={this.handlePressResult}
          onPressMC={this.onPressMC}
          onPressMR={this.onPressMR}
          onPressMS={this.onPressMS}
          onPressMneg={this.onPressMneg}
          onPressMplus={this.onPressMplus}
        />
      </div>
    );
  }
}

export default App;
