import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import { BsGearFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';


class Header extends Component {
    constructor(props) {
        super(props)

        this.onLogoutClick = this.onLogoutClick.bind(this)
    }


    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
        localStorage.clear();
    };
    render() {


        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <BsGearFill />  </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item >My Account</Dropdown.Item>

                        <Dropdown.Item ><Link to="/dashboard" >Dashboard</Link></Dropdown.Item>

                        <Dropdown.Item ><Link to="/myinfo" >My Info</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to="/" onClick={this.onLogoutClick} >Logout</Link></Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}


Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Header);