import React from 'react';
import  { Form, FormGroup, Input, Button  } from 'reactstrap';
import './FooterForm.css';

const initialState = {
    name: "",
    email: "",
    message: "",
    nameError: "",
    emailError: "",
    messageError: ""
  };
  
 class ValiationForm extends React.Component {
    state = initialState;
  
    handleChange = event => {
      const isCheckbox = event.target.type === "checkbox";
      this.setState({
        [event.target.name]: isCheckbox
          ? event.target.checked
          : event.target.value
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
        };

      if (emailError || nameError || messageError ) {
        this.setState({ emailError, nameError, messageError,  });
        return false;
      }
  
      return true;
    };
  
    handleSubmit = event => {
      event.preventDefault();
      const isValid = this.validate();
      if (isValid) {
        console.log(this.state);
        // limpiar formulario
        this.setState(initialState);
      }
    };
  
    render() {
      return (
        <Form onSubmit={this.handleSubmit} id="contact-form" method="post" to="./sendmail-footer.php">
          <FormGroup>
            <Input
              name="name"
              placeholder="nombre"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.nameError}
            </div>
          </FormGroup>
        
          <br/>
          <FormGroup>
            <Input
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </div>
          </FormGroup>
          <br/>
          <FormGroup>
            <Input
            style={{ height: 120}}
            placeholder="mensaje"
             className="textarea"
             type="textarea"
             name="message"
              value={this.state.message }
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.messageError}
            </div>
          </FormGroup>
          <Button className="btn-send" type="submit">Enviar Mensaje</Button>
        </Form>
      );
    }
  }
 
export default ValiationForm ;