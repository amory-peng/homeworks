import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {result: 0, num1: '', num2: '' };
    this.setNum = this.setNum.bind(this);

  }

  setNum(key) {
    console.log(`${key}: ${this.state[key]}`);
    return (event => this.setState({[key]: event.currentTarget.value }));
  }

  calc(op) {
    const x = parseInt(this.state.num1);
    const y = parseInt(this.state.num2);
    let out = 0;
    switch (op) {
      case '+':
      out = x + y;
      break;
      case '-':
      out = x - y;
      break;
      case 'x':
      out = x * y;
      break;
      case '/':
      out = x / y;
      break;
      default:
      break;
    }

    return (event => this.setState({result: out}));
  }

  render() {
    return (
      <div>
        <input onChange={this.setNum('num1')} value={this.state.num1}></input>
        <input onChange={this.setNum('num2')} value={this.state.num2}></input>
        <button onClick={this.calc('+')}>+</button>
        <button onClick={this.calc('-')}>-</button>
        <button onClick={this.calc('x')}>*</button>
        <button onClick={this.calc('/')}>/</button>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default Calculator;
