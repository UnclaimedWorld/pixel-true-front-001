import React from 'react';
import BaseButton from "../../components/base/BaseButton";
import BaseForm from "../../components/base/BaseForm";
import SocialButton from "../../components/login/SocialButton";
import './index.scss';
import BaseInput from "../../components/base/BaseInput";
import BaseIcon from '../../components/base/BaseIcon';
import PasswordInput from '../../components/pages/PasswordInput';
import { inputResultType } from '../../components/base/props';
import { Link } from 'react-router-dom';

export default class LoginPage extends React.Component {
  state = {
    email: '',
    password: ''
  }
  onInput = (e: inputResultType) => {
    this.setState(() => ({
      [e.name]: e.value
    }));
  }
  onSubmit = () => {
    console.log('abc')
  }
  render() {
    return (
      <main className="login-page">
        <button className="login-page__question-button icon-button">
          <BaseIcon icon="loupe"/>
        </button>
  
        <h2 className="login-page__title">WELCOME TO<br/> Monumental habits</h2>
        <div className="login-page__social">
          <SocialButton className="login-page__social-button" type="google"/>
          <SocialButton className="login-page__social-button" type="facebook"/>
        </div>
        <div className="login-page__form-body">
          <h1 className="login-page__form-header">Log in with email</h1>
          <BaseForm className="login-page__form-wrap" onSubmit={this.onSubmit}>
            <BaseInput 
              value={this.state.email} 
              className="login-page__form-input" 
              type="email" 
              placeholder="Email" 
              icon="mail" 
              name="email"
              onInput={this.onInput} 
            />
            <PasswordInput
              value={this.state.password} 
              className="login-page__form-input login-page__form-input--last" 
              name="password"
              onInput={this.onInput} 
            />
            <BaseButton className="login-page__form-button" children="Login"/>
            <Link to="/recover" className="login-page__text login-page__form-link link-item">Forgot Password?</Link>
            <p className="login-page__text login-page__form-text">Don???t have an account? <Link to="/register" className="link-item">Sign up</Link></p>
          </BaseForm>
        </div>
      </main>
    )
  }
}
