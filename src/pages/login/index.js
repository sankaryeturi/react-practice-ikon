import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Login from './Login';
import { LOGIN_SUCCESS } from './login.actions';
const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  push,
  login: payload => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload,
    });
  },
});

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.username = React.createRef();
    this.password = React.createRef();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    let loginObject = this;
    e.preventDefault();
    fetch('http://ikondev1.cloudapp.net/api/auth_db', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.username.current.value,
        password: this.password.current.value,
      }),
    })
      .then(resp => resp.json())
      .then(function(response) {
        loginObject.props.login(response);
        loginObject.props.push('/home');
      });
  };

  render() {
    return (
      <Login
        {...{
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit,
          username: this.username,
          password: this.password,
          value: this.state.value,
        }}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
