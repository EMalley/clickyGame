import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Instructions from './components/Instructions';
import Characters from "./components/Characters";
// import Footer from './components/Footer';
import characters from './characters.json';
// import ModalDiv from './components/ModalDiv';

class App extends Component {
  state = {
    characters,
    clicked: [],
    score: 0
  }

  handleClick = id => {
    console.log("click")
    if (this.state.clicked.includes(id)) {
      alert(`Game over! You socred ${this.state.score}`)
      this.setState({score: 0, clicked: []})
    } else {
      if(this.state.score == 11){
        alert("Winner");
        this.setState({score: 0 , clicked: []})
      }
      else{
        this.state.clicked.push(id);
        // Shuffles characters
        for (let i = this.state.characters.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
          [this.state.characters[i], this.state.characters[j]] = [this.state.characters[j], this.state.characters[i]]; // swap elements
        }
        this.setState({score: this.state.score + 1});
      }
    }
  }
  

  render() {
    return (
      <div>
        <Navbar score={this.state.score} />
        <Instructions />
        <Wrapper>
          {this.state.characters.map(characters => (
            <Characters
              image={characters.image}
              key = {characters.id}
              id={characters.id}
              name={characters.name} 
              onClick = {this.handleClick} />))}
        </Wrapper>
        {/* <Footer /> */}
      </div>
    )
  }

};



export default App;
