import React from "react";
import { Form, FormGroup, Input, Button, Alert } from "reactstrap";
import "./MainForm.css";

const initialState = {
  name: "",
  email: "",
  message: "",
  nameError: "",
  emailError: "",
  messageError: "",
  alert: "",
};

class ValiationForm extends React.Component {
  state = initialState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let messageError = "";

    if (!this.state.name) {
      nameError = "Write down a valid name.";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Write down a valid email.";
    }

    if (!this.state.name) {
      messageError = "Write down your message.";
    }

    if (emailError || nameError || messageError) {
      this.setState({ emailError, nameError, messageError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    this.setState({
      alert: "",
    });

    if (isValid) {
      fetch("http://devlights.com/sendmail-main.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message,
        },
      })
        .then((data) => {
          this.setState({
            alert: "Message sent!",
          });

          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(this.state);
      this.setState(initialState);
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} id="contact-form">
        {alert && alert.length > 0 && <Alert color="success">{alert}</Alert>}

        <FormGroup>
          <Input
            name="name"
            placeholder="Name *"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }} className="text-left">
            {this.state.nameError}
          </div>
        </FormGroup>

        <br />

        <FormGroup>
          <Input
            name="email"
            placeholder="Email *"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }} className="text-left">
            {this.state.emailError}
          </div>
          <br />
        </FormGroup>

        <FormGroup>
          <Input
            style={{ height: 120 }}
            placeholder="Message  *"
            className="textarea"
            type="textarea"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }} className="text-left">
            {this.state.messageError}
          </div>
        </FormGroup>

        <Button className="btn-send" type="submit">
          submit
        </Button>
      </Form>
    );
  }
}

export default ValiationForm;
