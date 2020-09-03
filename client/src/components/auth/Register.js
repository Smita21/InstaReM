import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.errors) {
      return {
        errors: nextProps.errors
      };
    }
  }

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="authcontainer">

        <Link to="/" className="text-light mt-3 cross" >X</Link>
        <div className="signup-form ">


          <form noValidate onSubmit={this.onSubmit}>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                className={classnames("", {
                  invalid: errors.email
                })}
              />
              <span className="danger-text">{errors.email}</span>
            </div>
            <div className="form-group">
              <label htmlFor="password"  >Password</label>

              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames("", {
                  invalid: errors.password
                })}
              />
              <span className="danger-text">{errors.password}</span>
            </div>




            <div className="form-group">
              <button

                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Sign up
                </button>
            </div>
          </form>
          <div className="hint-text text-light">Already have an account?
                  <Link to="/login">Login</Link></div>
        </div>
      </div >
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

