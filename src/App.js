import React from 'react';
import './App.css';

class App extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {count: 0}

    this.increaseClick = this.increaseClick.bind(this)
    // this.decreaseClick = this.decreaseClick.bind(this)
    this.resetClicks = this.resetClicks.bind(this)
  }
  
  increaseClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  // decreaseClick() {
  //   this.setState({
  //     count: this.state.count - 1
  //   });
  // }
  resetClicks() {
    var answer = prompt("Are you sure that you want to reset the visitor count? Type 'yes' or 'no'");
    var yea = answer.toLowerCase();
    var nay = answer.toLowerCase();

    if(yea === 'yes') {
      this.setState({
        count: 0
      });
    } else if (nay === 'no') {
      alert('Press okay to continue without reset');
    } else if (nay !== 'no' || yea !== 'yes') {
      alert('Answer yes or no')
    }
    
  }
  
  render() {
    return (
      <div className="App-header">
        <div className="holdButtons">
          <button onClick={this.increaseClick}>Add Visitor</button>
          {/* <button onClick={this.decreaseClick}>Decrease</button> */}
          <button onClick={this.resetClicks}>Reset</button>
          <h3>  Visitor Count: {this.state.count}</h3>
        </div>
      </div>
    );
  }
  
}

export default App;

// const add = () => {
//   let number = this.number + 1;

//   this.setState({number});
//   alert(1); 
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Visitors</h1>
//         <button onClick={add}>Click to add</button>
//         <h2>Number is: {add.number} </h2>

//       </header>
//     </div>
//   );
// }

