import React from 'react'
import { Redirect } from 'react-router-dom';
import AuthField from '../misc/AuthField';
import AuthService from '../../services/AuthService';
import { withAuthContext } from '../../contexts/AuthStore';
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// const URL_PATTERN = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
const PASS_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

const validators = {
  username: v => v.length > 3,
  email: v => EMAIL_PATTERN.test(v),
  password: v => PASS_PATTERN.test(v),
  // avatarURL: v => URL_PATTERN.test(v)
}

class Register extends React.Component {

  state = {
    data: {
      username: '',
      email: '',
      password: '',
      // avatarURL: ''
    },
    errors: {
      username: true,
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

    AuthService.register(this.state.data).then(
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
            username: true,
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
      return < Redirect to="/login" />
    }
    
    return (
      <div className='Login-Container'>
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            < AuthField 
              label='Username'
              name='username'
              value={data.username}
              touch={touch.username}
              error={errors.username}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              validationClassName={this.getValidationClassName('username')}
              errormessage='At least 4 characters'
              />
              < AuthField 
              label='Email'
              name='email'
              value={data.email}
              touch={touch.email}
              error={errors.email}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              validationClassName={this.getValidationClassName('email')}
              errormessage='Invalid email format'
              type='email'
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
              errormessage='At least 8 characters, 1 number, 1 upper and 1 lowercase'
              type='password'
              />
              <button type='submit' className='btn-Submit'
              // className={`btn ${hasErrors ? 'btn-danger' : 'btn-success'}`}
              disabled={hasErrors}>Register
              </button>
          </form>
        </div>
      </div>
    )
  }
}

export default withAuthContext(Register);