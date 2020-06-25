import React,  {Component} from 'react';
import  { Form, FormGroup, Input, Label, Button,  } from 'reactstrap';
import './MainForm.css';

class form extends Component {


    constructor() {
        super()
        this.state = {
            name : '',
            email:'',
            message:''
        }

        this.handleChange =this.handleChange.bind(this)

    }

    handleChange = e => {

        this.setState({[e.target.name]: e.target.value })
    }




    

    

    render(){
        return(
            <Form style={{ padding: 20}} className="needs-validation"  noValidate >
                <FormGroup>
                    <Label for="name"/>
                    <Input 
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    />
                     <div className="valid-feedback">Looks good!</div>
                </FormGroup>
                <FormGroup>
                    <Label for="email"/>
                    <Input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    />
                     <div className="valid-feedback">Looks good!</div>
                </FormGroup>

                <FormGroup>
                    <Label for="message"/>
                    <Input
                    style={{ height: 120}}
                    className="textarea"
                    type="textarea"
                    name="Message"
                    onChange={this.handleChange}
                    />
                     <div className="valid-feedback">Looks good!</div>
                </FormGroup>
                <Button className="btn-send">Send</Button>
            </Form>
        );
    }
}

export default form;