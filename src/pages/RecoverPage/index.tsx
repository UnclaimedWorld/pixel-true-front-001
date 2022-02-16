import React from "react";
import { Link } from "react-router-dom";
import BaseButton from "../../components/base/BaseButton";
import BaseForm from "../../components/base/BaseForm";
import BaseIcon from "../../components/base/BaseIcon";
import BaseImage from "../../components/base/BaseImage";
import BaseInput from "../../components/base/BaseInput";
import { inputResultType } from "../../components/base/props";
import './index.scss';

export class RecoverPage extends React.Component {
  state = {
    email: ''
  }
  onSubmit = () => {}
  onInput = (e: inputResultType) => {
    this.setState(() => ({
      [e.name]: e.value
    }))
  }
  render() {
    return (
    <main className="recover-page">
      <Link className="recover-page__back-button icon-button" to="/login">
        <BaseIcon icon="arrow-left"/>
      </Link>
      <h1 className="recover-page__heading">Forgot your password?</h1>
      <BaseImage className="recover-page__image" src={require('./recover-01.svg').default} alt=""/>
      <BaseForm className="recover-page__form" onSubmit={this.onSubmit}>
        <p className="recover-page__text recover-page__form-text">
          Enter your registered email below to receive password reset instruction
        </p>
        <BaseInput 
          value={this.state.email}
          onInput={this.onInput}
          className="recover-page__field" 
          type="email" 
          name="email" 
          placeholder="Email"
        />
        <BaseButton className="recover-page__submit" type="submit">
          Send Reset Link
        </BaseButton>
      </BaseForm>
      <p className="recover-page__text">
        Remember password? <Link to="/login" className="link-item">Login</Link>
      </p>
    </main>
    )
  }
}