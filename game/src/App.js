import React, { Component } from "react";
import ImageDiv from "./components/ImageDiv";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Count from "./components/Count";
import Wins from "./components/Wins";
import imgs from "./imgs.json";

class App extends Component {
  // Setting this.state.imgs to the imgs json array
  state = {
    imgs,
    ids: [],
    count: 0,
    wins: 0
  };

  checkImg = id => {
    // Filter this.state.imgs for imgs with an id not equal to the id being removed
    // const imgs = this.state.imgs.filter(imgs => imgs.id !== id);
    // Set this.state.imgs equal to the new imgs array
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
    background: "#121212"
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
              count={this.count}
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
