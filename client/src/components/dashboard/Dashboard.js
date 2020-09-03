import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from '../../redux/actions/authActions';
import { BsGearFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import Header from './Header';


class Dashboard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      fname: ''
    }
  }

  componentDidMount() {
    this.setState({
      fname: localStorage.getItem('fname'),


    })

  }


  render() {
    return (
      <div className="container-fluid dashboard">
        <div className="align">
          <Header />

        </div>
        <div >
          <h1 className="text-center">Dashboard</h1>
          <div className="welcome-card mt-5 rounded">
            <h3>Welcome {this.state.fname}</h3>
            <p className="mt-5">We've saved your profile details.</p>
            <p>You can continue setting it up from where you left.</p>
            <Link to="/personalinfo" className="btn btn-primary rounded mt-5">Let's Continue</Link>

          </div>
        </div>


      </div>

    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);