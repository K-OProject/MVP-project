import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
    };
    this.slide = this.slide.bind(this);
  }

  slide() {
    setTimeout(() => {
      if (this.state.i < this.props.items.items.length - 1) {
        this.setState({ i: this.state.i + 1 });
      } else {
        this.setState({ i: 0 });
      }
    }, 3500);
  }

  render() {
    this.slide();
    let item = this.props.items.items;
    return (
      <div>
        <div>
          <img
            src={item[this.state.i]}
            style={{
              width: "60%",
              height: "60%",
              position: "inherit",
              padding: "25px",
              /* a<div>lign-content: center; */
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              float: "left",
            }}
          />
        </div>
        <div style={{ width: "40%", float: "right", padding: "70px" }}>
          <h5>About RBKat </h5>
          <span>
            This website only goal is to save as many animals as possible. We
            try to find good shelter and a loving family for our pets and a life
            companion for you. Help us help these animals, and help us help you
            to find a faithful partner for life. We believe in your empathy, we
            believe that you will make the right choice, we believe in you.
          </span>
        </div>
      </div>
    );
  }
}

export default Home;
