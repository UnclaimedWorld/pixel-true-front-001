import React from "react";
import { Link } from "react-router-dom";
import BaseButton from "../../components/base/BaseButton";
import BaseCheckbox from "../../components/base/BaseCheckbox";
import BaseImage from "../../components/base/BaseImage";
import BaseInput from "../../components/base/BaseInput";
import SocialButton from "../../components/login/SocialButton";
import './index.scss';

export default class RegisterPage extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    keep: false,
    subscribe: true
  }
  onInput = (e: any) => {
    this.setState(() => ({
      [e.name]: e.value
    }));
  }
  render() {
    return (
      <main className="register-page">
        <BaseImage className="register-page__image" src={require('./register-01.svg').default} alt=""/>
        <h1 className="register-page__heading">Create your account</h1>
        <BaseInput 
          className="register-page__field" 
          value={this.state.name} 
          name="name" 
          onInput={this.onInput} 
          icon="user" 
          theme="white"
          placeholder="Name"
        />
        <BaseInput 
          className="register-page__field" 
          value={this.state.email} 
          name="email" 
          onInput={this.onInput} 
          type="email" 
          icon="mail"
          theme="white"
          placeholder="Email"
        />
        {this.state.keep}
        <BaseInput 
          className="register-page__field register-page__field--last" 
          value={this.state.password} 
          name="password" 
          onInput={this.onInput} 
          type="password" 
          icon="lock"
          theme="white"
          placeholder="Password"
        />
        <BaseCheckbox className="register-page__checkbox" value={this.state.keep} name="keep" onInput={this.onInput}>
          Keep me signed in
        </BaseCheckbox>
        <BaseCheckbox className="register-page__checkbox" value={this.state.subscribe} name="subscribe" onInput={this.onInput}>
          Email me about special pricing and more
        </BaseCheckbox>
        <BaseButton className="register-page__submit-button">Create Account</BaseButton>
        <p className="register-page__separator">Or sign in with</p>
        <div className="register-page__socials-wrap">
          <SocialButton className="register-page__social" type="google" short/>
          <SocialButton className="register-page__social" type="facebook" short/>
        </div>
        <p className="register-page__text-signin">
          Already have an account? <Link to="login">Sign in</Link>
        </p>
      </main>
    )
  }
}