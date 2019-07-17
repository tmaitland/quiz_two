import React from 'react';
import './App.css';
import Beach from './images/beach-clouds.jpg';
import Clouds from './images/clouds-day.jpg';
import Forest from './images/fog-forest.jpg';
import Sunset from './images/sunset-poppy.jpg';

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
          <h4>  Visitor Count: {this.state.count}</h4>
        </div>
          <div className="galleryTitle">
            <h1>Online Gallery Showcase</h1>
            
          </div>
        <div className="holdGallery">
          <div className="galleryImg">
            <img src={Beach} alt="Bright beach day" />
          </div>
          <div className="galleryImg">
             <img src={Clouds} alt="Bright beach day" />
          </div>
          <div className="galleryImg">
             <img src={Forest} alt="Bright beach day" />
          </div>
          <div className="galleryImg">
              <img src={Sunset} alt="Bright beach day" />
          </div>
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

