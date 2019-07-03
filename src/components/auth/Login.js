import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthField from '../misc/AuthField';
import AuthService from '../../services/AuthService';
import { withAuthContext } from '../../contexts/AuthStore';
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASS_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

const validators = {
  email: v => EMAIL_PATTERN.test(v),
  password: v => PASS_PATTERN.test(v)
}

class Login extends React.Component {

  state = {
    data: {
      email: '',
      password: ''
    },
    errors: {
      email: true,
      password: true
    },
    touch: {},
    redirect: false,
    wrongCredentials: false
  }

  handleChange = (e) => {
    const { name, value } = e.target
    const isValid = validators[name](value)

    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: !isValid
      }
    })
  }

  handleBlur = (e) => {
    const { name } = e.target

    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    })
  }

  getValidationClassName = (attr) => {
    const { touch, errors } = this.state
    if (!touch[attr]) {
      return 'form-control'
    } else if (errors[attr]) {
      return 'form-control is-invalid'
    } else {
      return 'form-control is-valid'
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    AuthService.login(this.state.data).then(
      (response) => {
        console.log(this.props)
        this.setState({ redirect: true })
        console.log(this.props)
        this.props.onUserChange(response.data)
      },
      error => {
        this.setState({
          wrongCredentials: true,
          errors: {
            ...this.state.errors,
            email: true,
            password: true
          }
        }) 
      }
    )
  }

  render () {
    
    const { data, errors, touch } = this.state
    const hasErrors = Object.values(errors).some(el => el === true )

    if (this.state.redirect) {
      return < Redirect to="/home" />
    }
    
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            < AuthField 
            label='Email'
            name='email'
            value={data.email}
            touch={touch.email}
            error={errors.email}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            validationClassName={this.getValidationClassName('email')}
            />
            < AuthField 
            label='Password'
            name='password'
            value={data.password}
            touch={touch.password}
            error={errors.password}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            validationClassName={this.getValidationClassName('password')}
            />
            <button type='submit'
            className={`btn ${hasErrors ? 'btn-danger' : 'btn-success'}`}
            disabled={hasErrors}>Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default withAuthContext(Login);