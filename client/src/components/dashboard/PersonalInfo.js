import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import Header from './Header'
import axios from 'axios';

import React, { Component } from 'react';
import { setlocalstorage } from '../../services/localStorage';

export class PersonalInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstname: "",
            middlename: "",
            lastname: "",
            contact: "",
            address: "",
            firstnameerror: "",
            middlenameerror: "",
            lastnameerror: "",
            contacterror: "",
            addresserror: ""

        }

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.postData = this.postData.bind(this);
        this.validate = this.validate.bind(this);

    }

    changeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    postData(e) {
        axios.post('https://react1.getsandbox.com/users', this.state)
            .then(response => {
                setlocalstorage();
            })
            .catch(error => {
                console.log(error)
            })
        alert('Thank you for submitting your response');
    }


    validate() {
        let firstnameerror = "";
        if (!this.state.firstname) {
            firstnameerror = "name cannot be blank";
        }

        let middlenameerror = "";
        if (!this.state.middlename) {
            middlenameerror = "middlename cannot be blank";
        }

        let lastnameerror = "";
        if (!this.state.firstname) {
            lastnameerror = "name cannot be blank";
        }
        let contacterror = "";
        if (!this.state.firstname) {
            contacterror = "name cannot be blank";
        }
        let addresserror = "";
        if (!this.state.firstname) {
            addresserror = "name cannot be blank";
        }

        if (firstnameerror || middlenameerror || lastnameerror || contacterror || addresserror) {
            this.setState({
                firstnameerror, middlenameerror, lastnameerror, contacterror, addresserror
            });
            return false;
        }
        return true;
    }


    submitHandler(e) {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.postData();

        }
    }

    render() {
        const { firstname, middlename, lastname, contact, address } = this.state
        return (
            <div>
                <div className="container">
                    <div className="align-next">
                        <Header />

                    </div>
                    <p className="text-center mt-5  ">Personal Information</p>
                    <p className="text-center">
                        Help us with your personal information to build your profile
           </p>
                    <p className="bg-info">Personal Details</p>
                    <p>Please enter your name as mentioned on your PAN card.</p>
                    <form onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <input type="text"
                                placeholder="FirstName"
                                name="firstname"
                                id="fname"
                                value={firstname}
                                onChange={this.changeHandler} />
                            <div style={{ color: 'red' }}>{this.state.firstnameerror}</div>

                        </div>
                        <div className="form-group">
                            <input type="text"

                                placeholder="MiddleName"
                                name="middlename"
                                value={middlename}
                                onChange={this.changeHandler} />
                        </div>
                        <div className="form-group">
                            <input type="text"
                                placeholder="LastName"
                                name="lastname"
                                value={lastname}
                                onChange={this.changeHandler} />

                        </div>
                        <p className="bg-info">Contact</p>

                        <div className="form-group">
                            <input type="text"
                                placeholder="Mobile Number"
                                name="contact"
                                value={contact}
                                onChange={this.changeHandler} />
                        </div>
                        <div className="form-group">
                            <p className="bg-info">Address</p>

                            <input type="text"
                                placeholder="address"
                                name="address"
                                value={address}
                                onChange={this.changeHandler} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>



                    </form>
                </div>
            </div>
        )
    }
}

export default PersonalInfo



