import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Form, Button, Input, Label, FormGroup, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component  {
    constructor(props){

        super(props);
        this.state={
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched : {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        };

        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleInputChange= this.handleInputChange.bind(this);
    }


    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });

    }

    handleSubmit(event){
        console.log("current state is " +JSON.stringify(this.state));
        alert("current state is " +JSON.stringify(this.state));
        event.preventDefault();

    }

    handleBlur = (field) => (evt) =>{
        this.setState({
            touched : {...this.state.touched, [field]:true }
        });
    }

    validate(firstname, lastname, telnum, email){
        const errors ={
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if(this.state.touched.firstname && firstname.length <3)
            errors.firstname = "first name should contain at least 3 caracters" ;
        else
            if(firstname.length > 10)
                errors.firstname ="first name should't be more than 10 caracters";

        if(this.state.touched.lastname && firstname.length <3)
            errors.lastname = "last name should contain at least 3 caracters" ;
        else
            if(lastname.length > 10)
                errors.lastname ="first name should't be more than 10 caracters";
        
        const reg= /^\d+$/;

        if(this.state.touched.telnum && !reg.test(telnum) )
            errors.telnum = "Tel number should contain only numbers" ;
        
        if(this.state.touched.email && email.split('').filter(x => x === '@').length !==1 )
            errors.telnum = "Email should contain @" ;

        return errors;
        
           
            
        
    }

    


    render(){
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        return(
            <div className="container">
                <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Contact Us</h3>
                            <hr />
                        </div>                
                    
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                                <h5>Our Address</h5>
                                <address>
                                121, Clear Water Bay Road<br />
                                Clear Water Bay, Kowloon<br />
                                HONG KONG<br />
                                <i className="fa fa-phone"></i>: +852 1234 5678<br />
                                <i className="fa fa-fax"></i>: +852 8765 4321<br />
                                <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                                </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                            <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                            <div className="btn-group" role="group">
                                <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                                <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                                <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                            </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3> Send us your feedback </h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname" placeholder="First name" 
                                        Value={this.state.firstname} 
                                        valid = {errors.firstname === ''}
                                        invalid ={errors.firstname !== '' }
                                        onChange={this.handleInputChange} 
                                        onBlur={this.handleBlur('firstname')}/>
                                    <FormFeedback> {errors.firstname}</FormFeedback>
                                </Col>

                            </FormGroup>


                            <FormGroup row>
                                <Label for="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="firstname" placeholder="Last name" 
                                        Value={this.state.lastname} 
                                        valid = {errors.lastname === ''}
                                        invalid ={errors.lastname !== '' }
                                        onChange={this.handleInputChange} 
                                        onBlur={this.handleBlur('lastname')}/>
                                    <FormFeedback> {errors.lastname}</FormFeedback>
                                </Col>

                            </FormGroup>


                            <FormGroup row>
                                <Label for="telnum" md={2}>Telephone number</Label>
                                <Col md={10}>
                                    <Input type="text" id="telnum" name="telnum" placeholder="Telephone number" 
                                        Value={this.state.telnum} 
                                        valid = {errors.telnum === ''}
                                        invalid ={errors.telnum !== '' }
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur('telnum')}/>
                                    <FormFeedback> {errors.telnum}</FormFeedback>
                                </Col>

                            </FormGroup>


                            <FormGroup row>
                                <Label htmlfor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="text" id="email" name="email" placeholder="Email" 
                                    Value={this.state.email} 
                                    valid = {errors.email === ''}
                                    invalid ={errors.email !== '' }
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleBlur('email')} />
                                   
                                    <FormFeedback> {errors.email}</FormFeedback>
                                </Col>

                            </FormGroup>

                            <FormGroup row>
                            <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>

                                <Col md={{size:3 , offset: 1}} > 
                                    <Input type="select" name="contactType" Value={this.state.contactType} onChange={this.handleInputChange}>
                                        <option>Email</option>
                                        <option>Telephone</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="message" md={2}> Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"  Value={this.state.message} onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col md={{size:10 , offset:2 }}>
                                    <Button type="submit" color="primary"> Send your feedback</Button>
                                </Col>
                            </FormGroup>


                        </Form>
                        

                    </div>

                </div>
        </div>
        );

   
       
     }
}

export default Contact;