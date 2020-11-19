import React, { Component } from 'react';
import './LoginPage.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import qs from 'qs';
import { Redirect } from 'react-router-dom';

class EnterCode extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
        code: '',
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({[name]: value});
  }
  
  get_check_exist = (code, email) => {
    return axios.get('https://maskillinois.web.illinois.edu/reset-password', {
      params: { 
        key: code,
        email: email,
      }
    }).then(function(response) {
        if(response.data === 'yes') return true
        else return false
    })
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    const verificationCode = {
        code: this.state.code,
    };

    const reset_password_value = this.get_check_exist(this.state.code, this.props.location.state.email_for_code.email).then(data => {
      if(data === true) this.setState({ check_correct: true })
      else this.setState({ check_correct: false })
    })
    await reset_password_value

    if(this.state.check_correct === true) this.props.history.push('/newpassword', {email_for_reset: this.props.location.state.email_for_code.email});
    else alert('The code you entered is incorrect. Please contact us to recover your account.')
  }

  render() {
    return (
      <div className='wrapper-login'>
        <div className='form-wrapper-get-code'>
          <h2>Enter the verification code sent to your email</h2> <br />
          <form onSubmit={this.handleSubmit} className = 'login-form' noValidate>
            <div className='email-login'>
              <label htmlFor="email-login" className = 'label-login'>Verification code</label>
              <input type='email' name='code' onChange={this.handleChange} noValidate required/>
            </div>
            <div className='submit-login'>
              <button className = 'sign-in-login'>Submit verification code</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EnterCode;