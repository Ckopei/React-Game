import React, { Component } from "react";
import ImageDiv from "./components/ImageDiv";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Count from "./components/Count";
import imgs from "./imgs.json";

class App extends Component {
  // Setting this.state.imgs to the imgs json array
  state = {
    imgs,
    count: 0
  };

  checkImg = id => {
    // Filter this.state.imgs for imgs with an id not equal to the id being removed
    const imgs = this.state.imgs.filter(imgs => imgs.id !== id);
    // Set this.state.imgs equal to the new imgs array
    this.setState({ imgs });
  };

  count = id => {
    console.log(id);
    this.setState({count: this.state.count + 1})
  }

  // Map over this.state.imgs and render a ImageDiv component for each imgs object
  render() {
    return (
      <Wrapper>
        <Title>Don't click the same one twice!</Title>
        <Count
          count={this.state.count}
        />
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
    );
  }
}

export default App;
