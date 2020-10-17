import React from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

class SignupF extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      firstName: "",
      secondName: "",
      adress: "",
      email: "",
      birthday: "",
      cardNumber: "",
      PhoneNumber: "",
      password: "",
    };
  }
  clickHandler(e) {
    for (var key in this.state) {
      if (this.state[key] === "") {
        alert(" the  " + key + "  field is empty");
        e.preventDefault();
        return;
      }
    }
    axios.post("/api/user", this.state).then((res) => {
      if (res === "exists") {
        alert("user exists");
      } else {
        this.props.login(res.data.email);
      }
    });
    e.preventDefault();
  }
  onChange(event) {
    let inp = event.target;
    this.setState({ [inp.name]: inp.value });
  }

  render() {
    const formContact = {
      display: "flex",
      justifyContent: "center",
    };
    const inputContact = {
      width: "300px",
    };
    const formMain = {
      width: "340px",
      border: "2px solid #bc007e",
      padding: "20px",
    };
    const styleForm = {
      backgroundColor: "white;",
      width: "300px",
      borderRadius: "6px;",
      margin: "0 auto 0 auto;",
      padding: "0px 0px 70px 0px;",
      border: "#2980b9 4px solid;",
    };
    const buttonForm = {
      marginRight: "5px;",
      padding: "10px;",
      fontSize: " 1em;",
      display: "block;",
      position: "relative;",
      marginLeft: "auto;",
      marginRight: "auto;",
    };
    return (
      <div style={formContact}>
        <Form className="form-1" style={(styleForm, formMain)}>
          <div className="row">
            <div className="col-xs-12 col-md-offset-3">
              <div className="col-md-12 ">
                <Form.Label htmlFor="fname" novalidate>
                  firstName
                </Form.Label>
                <Form.Control
                  style={styleForm}
                  type="text"
                  name="firstName"
                  placeholder="name"
                  onChange={this.onChange}
                />
                <br></br>
              </div>
            </div>
            <div className="col-xs-12 col-md-offset-3">
              <div className="col-md-12">
                <Form.Label htmlFor="Sname">secondName</Form.Label>
                <br></br>
                <Form.Control
                  style={styleForm}
                  type="text"
                  name="secondName"
                  placeholder="name"
                  onChange={this.onChange}
                />
              </div>
            </div>

            <br></br>
            <div className="col-xs-12 col-md-offset-3">
              <div className="col-md-12">
                <Form.Label htmlFor="password">password</Form.Label>
                <br></br>
                <Form.Control
                  style={inputContact}
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={this.onChange}
                />{" "}
                <br></br>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-offset-3">
              <div className="col-md-12">
                <Form.Label htmlFor="adress">adress</Form.Label>
                <br></br>

                <Form.Control
                  style={inputContact}
                  type="text"
                  name="adress"
                  placeholder="adress"
                  onChange={this.onChange}
                />
                <br></br>
              </div>
            </div>
            <div className="col-xs-12 col-md-offset-3">
              <div className="col-md-12">
                <Form.Label htmlFor="email">email</Form.Label>
                <br></br>
                <Form.Control
                  style={inputContact}
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={this.onChange}
                />
                <br></br>
              </div>
            </div>
            <div className="col-xs-12 col-md-offset-3">
              <div className="col-md-12">
                <Form.Label htmlFor="birthday">birthday</Form.Label>
                <br></br>
                <Form.Control
                  style={inputContact}
                  type="date"
                  name="birthday"
                  max="2030-12-31"
                  onChange={this.onChange}
                />
                <br></br>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-offset-3">
              <div className="col-md-12">
                <Form.Label htmlFor="cardNumber">cardNumber</Form.Label>
                <br></br>
                <Form.Control
                  style={inputContact}
                  type="number"
                  name="cardNumber"
                  placeholder="cardNumber"
                  onChange={this.onChange}
                />
              </div>
            </div>
            <br></br>
            <div className="col-xs-12 col-md-offset-3">
              <div className="col-md-12">
                <Form.Label htmlFor="PhoneNumber">PhoneNumber</Form.Label>
                <br></br>

                <Form.Control
                  style={inputContact}
                  type="number"
                  name="PhoneNumber"
                  placeholder="PhoneNumber"
                  onChange={this.onChange}
                />
                <br></br>
              </div>
            </div>
          </div>
          <Button type="submit" onClick={this.clickHandler} style={buttonForm}>
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}

export default SignupF;
