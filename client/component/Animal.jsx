import React from "react";

import axios from "axios";

import { Card, Button, CardDeck } from "react-bootstrap";

class Animal extends React.Component {
  constructor(props) {
    super(props);
    this.adoptPet = this.adoptPet.bind(this);
  }

  adoptPet() {
    let data = this.props.data;
    data.email = localStorage.getItem("currentUser");
    if (data.email === null || data.email === undefined) {
      alert("please login");
      return;
    }
    axios.post("/api/adoption", data).then((res) => {
      alert("congratulations please check your email");
      location.reload();
    });
  }

  render() {
    let data = this.props.data;

    // return (
    //    <div className="card">
    //      {console.log(this.props)}
    //     <span>my name:{data.name}</span>
    //     <img src={data.imageUrl} style={{ width: "50%" }}></img>
    //   </div>
    // );

    return (
      <div>
        <Card
          className="mb-3"
          style={{ color: "#808080", marginButton: "15px" }}
        >
          <Card.Img
            src={data.imageUrl}
            style={{ width: "400px", padding: "2px", height: "300px" }}
          />
          <Card.Body>
            <Card.Title> my name:{data.name} </Card.Title>
            <Card.Text> {data.description} </Card.Text>

            <Button variant="success" onClick={this.adoptPet}>
              {" "}
              Adopt{" "}
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Animal;
