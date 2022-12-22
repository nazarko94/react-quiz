import React, { Component } from 'react';
import './Auth.css';
import classNames from 'classnames';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default class Auth extends Component {

  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'type correct email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: 'Min length of password must be 8 symbols',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 8
        }
      }
    }
  }

  loginHandler = () => {

  };

  registerHandler = () => {

  };

  submitHandler = event => {
    event.preventDefault()
  };

  validateControl(value, validation) {
    if (!validation) {
      return true
    };

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    };

    if (validation.email) {
      isValid = validateEmail(value) && isValid
    };

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    };

    return isValid;
  };

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    });

    this.setState({
      formControls, isFormValid
    });
  };

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })
  };

  render() {
    return (
      <div className={classNames('auth')}>
        <div>
          <h1>Authrization</h1>

          <form onSubmit={this.submitHandler} className={classNames('authForm')}>

            { this.renderInputs() }

            <Button
              type="success"
              onClick={this.loginHandler}
              disabled={!this.state.isFormValid}
            >
              Sign in
            </Button>

            <Button
              type="primary"
              onClick={this.registerHandler}
              disabled={!this.state.isFormValid}
            >
              Sign up
            </Button>
          </form>
        </div>
      </div>
    )
  }
}