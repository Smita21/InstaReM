import React, { Component } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from '../../redux/actions/authActions';
import classnames from "classnames";

class Login extends Component {
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
    if (nextProps.auth.isAuthenticated) {
      nextProps.history.push("/dashboard");
    }
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
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="authcontainer">
        <Link to="/" className="text-light cross  mr-5 mt-3">X</Link>
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
                  invalid: errors.email || errors.emailnotfound
                })}
              />
              <span className="danger-text">
                {errors.email}
                {errors.emailnotfound}
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="password" >Password</label>

              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames("", {
                  invalid: errors.password || errors.passwordincorrect
                })}
              />
              <span className="danger-text">
                {errors.password}
                {errors.passwordincorrect}
              </span>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Login
                </button>
            </div>
          </form>
          <div className="hint-text text-light">Don't have an account?
                 <Link to="/register">Sign Up</Link></div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);