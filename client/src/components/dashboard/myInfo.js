import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import Header from './Header'
import axios from 'axios';

import React, { Component } from 'react'

export class myInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            middlename: '',
            lastname: '',
            contact: '',
            address: '',

        }

    }
    componentDidMount() {
        this.setState({
            firstname: localStorage.getItem('fname'),
            middlename: localStorage.getItem('mname'),
            lastname: localStorage.getItem('lname'),
            contact: localStorage.getItem('contact'),
            address: localStorage.getItem('address')

        })

    }



    render() {
        return (
            <div>
                <div className="container">
                    <div className="align-next">
                        <Header />

                    </div>

                    <div >
                        <p className="bg-info mt-5">Personal Details</p>

                        <span className="text-primary">Firstname :</span>
                        {this.state.firstname}
                    </div>
                    <div >
                        <span className="infoalign text-primary">Middlename:</span>
                        {this.state.middlename}

                    </div>
                    <div >
                        <span className="text-primary">lastname:</span>
                        {this.state.lastname}

                    </div>
                    <div >
                        <p className="bg-info mt-5">Contact</p>

                        <span className="text-primary">Mobile Number:</span>
                        {this.state.contact}

                    </div>
                    <div >
                        <p className="bg-info mt-5"> Address</p>

                        <span className="text-primary">address:</span>
                        {this.state.address}

                    </div>




                </div>
            </div>
        )
    }
}

export default myInfo



