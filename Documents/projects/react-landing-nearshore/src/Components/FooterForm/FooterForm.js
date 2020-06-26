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
        nameError = "name cannot be blank";
      }
      
      if (!this.state.email.includes("@")) {
          emailError = "invalid email";
        }
        
      if (!this.state.name) {
            messageError = "message cannot be blank";
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
        <Form onSubmit={this.handleSubmit}  id="contact-form-footer" method="post" to="./sendmail-footer.php">
            <br/>
          <FormGroup>
            <Input
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "white" }}>
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
            <div style={{ fontSize: 12, color: "white" }}>
              {this.state.emailError}
            </div>
          </FormGroup>
          <br/>

          <FormGroup>
            <Input
            style={{ height: 120}}
            placeholder="message"
             className="textarea"
             type="textarea"
             name="message"
              value={this.state.message }
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "white" }}>
              {this.state.messageError}
            </div>
          </FormGroup>
          <Button className="btn-send" type="submit">submit</Button>
        </Form>
      );
    }
  }
 
    export default ValiationForm ;