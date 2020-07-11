import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import "./FooterForm.scss";
import { Fragment } from "react";

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
      nameError = "Escriba su nombre";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Email invalido";
    }

    if (!this.state.name) {
      messageError = "Escriba un mensaje";
    }

    this.setState({ emailError, nameError, messageError });
    if (emailError || nameError || messageError) {
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        alert: "",
      });
      fetch("https://devlights.com/nearshore/sendmail-footer.php", {
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
            alert: "¡Mensaje enviado!",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} id="contact-form-footer">
        {this.state.alert.length >= 1 && (
          <div className="alert-message">{this.state.alert}</div>
        )}

        {this.state.alert.length === 0 && (
          <Fragment>
            <br />
            <FormGroup>
              <Input
                name="name"
                placeholder="Nombre *"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: "white" }}>
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
              <div style={{ fontSize: 12, color: "white" }}>
                {this.state.emailError}
              </div>
            </FormGroup>
            <br />

            <FormGroup>
              <Input
                style={{ height: 120 }}
                placeholder="Mensaje *"
                className="textarea"
                type="textarea"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: "white" }}>
                {this.state.messageError}
              </div>
            </FormGroup>
            <Button className="btn-send" type="submit">
              Enviar Mensaje
            </Button>
          </Fragment>
        )}
      </Form>
    );
  }
}

export default ValiationForm;
