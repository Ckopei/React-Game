import React, { Component } from "react";
import ImageDiv from "./components/ImageDiv";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Count from "./components/Count";
import Wins from "./components/Wins";
import imgs from "./imgs.json";

class App extends Component {
  // Setting this.state.imgs to the imgs json arrray
  state = {
    imgs,
    ids: [],
    count: 0,
    wins: 0
  };

  //Knuth Shuffle, found and explained on SO and refactored for my react app -> https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-this.state.imgs
  shuffleArr = () => {
    var currentIndex = this.state.imgs.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.state.imgs[currentIndex];
      this.state.imgs[currentIndex] = this.state.imgs[randomIndex];
      this.state.imgs[randomIndex] = temporaryValue;
    }

    this.setState({imgs: this.state.imgs})
  }

  checkImg = id => {
    // Filter this.state.imgs for imgs with an id not equal to the id being removed
    // const imgs = this.state.imgs.filter(imgs => imgs.id !== id);
    // Set this.state.imgs equal to the new imgs arrray
    // this.setState({ imgs });
    if (this.state.count >= 9) {
      this.setState({ wins: this.state.wins + 1 })
      this.setState({ count: 0 })
      this.setState({ ids: [] })
    }

    else if (!this.state.ids.includes(id)) {
      this.setState({ ids: [...this.state.ids, id] })
      this.setState({ count: this.state.count + 1 })
      console.log(this.state.ids)
    } else {
      this.setState({ count: 0 })
      this.setState({ ids: [] })
    }
  };

  count = () => {

    this.setState({ count: this.state.count + 1 })
  }
  //inline styling because my div needed a background color for Title and the wins/count, which are not wrapped in a larger component.
  divStyle = {
    background: "#121212",
    paddingTop: "10px"
  }

  // Map over this.state.imgs and render a ImageDiv component for each imgs object
  render() {
    return (
      <div style={this.divStyle}>
        <Title>Don't click the same one twice!</Title>
        <div className='row'>
          <div className='col-6'>
            <Wins
              wins={this.state.wins}
            />
          </div>
          <div className='col-6'>
            <Count
              count={this.state.count}
            />
          </div>
        </div>
        <Wrapper>

          {this.state.imgs.map(imgs => (
            <ImageDiv
              shuffleArr={this.shuffleArr}
              checkImg={this.checkImg}
              id={imgs.id}
              key={imgs.id}
              name={imgs.name}
              image={imgs.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
