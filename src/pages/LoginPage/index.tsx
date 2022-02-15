import BaseButton from "../../components/base/BaseButton";
import BaseForm from "../../components/base/BaseForm";
import SocialButton from "../../components/login/SocialButton";
import AppButton from "../../components/shared/AppButton";
import BaseImage from "../../components/base/BaseImage";
import './index.scss';

export default function LoginPage() {
  return (
    <main className="login-page">
      <BaseImage src="/pages/LoginPage/login-01.png" className="login-page__background"/>
      <BaseButton children={
        <img src={require('../../assets/icons/loupe.svg').default} alt="loupe icon"/>
      }/>
      <h2 className="login-page__title">WELCOME TO Monumental habits</h2>
      <div className="login-page__social container">
        <SocialButton className="login-page__social-button" type="google"/>
        <SocialButton type="facebook"/>
      </div>
      <div className="login-page__form-body">
        <h1 className="login-page__form-header">Log in with email</h1>
        <BaseForm className="login-page__form-wrap" children={
          <AppButton className="login-page__form-button" children="Login"/>
        } onSubmit={() => console.log('abc')}/>
        <a href="/reset" className="login-page__text login-page__form-link">Forgot Password?</a>
        <p className="login-page__text">Don’t have an account? <a href="/signup">Sign up</a></p>
      </div>
    </main>
  )
}
