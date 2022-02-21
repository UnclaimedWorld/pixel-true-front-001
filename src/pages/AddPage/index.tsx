import React from "react";
import BaseButton from "../../components/base/BaseButton";
import BaseIcon from "../../components/base/BaseIcon";
import BaseInput from "../../components/base/BaseInput";
import { inputResultType } from "../../components/base/props";
import HabitIndicator from "../../components/pages/HabitIndicator";
import './index.scss';

export default class AddPage extends React.Component {
  state = {
    name: ''
  }
  onInput = (e: inputResultType) => {
    this.setState(() => ({
      [e.name]: e.value
    }))
  }
  render() {
    return (
      <main className="add-page">
        <header className="header">
          <button className="icon-button icon-button--theme-dark">
            <BaseIcon icon="arrow-left"/>
          </button>
          <h1 className="header__heading">New Habit</h1>
        </header>
        <div className="add-page__field add-field add-field--transparent">
          <BaseInput 
            className="add-field__input"
            value={this.state.name} 
            name="name" 
            onInput={this.onInput} 
            placeholder="Enter habit name" 
            theme="white"
            size="sm"
          />
          <BaseButton className="add-field__button" theme="white" size="sm">
            <BaseIcon icon="book-reader"/>
          </BaseButton>
        </div>
        <div className="add-page__field habit-frequency">
          <div className="habit-frequency__title">Habit Frequency</div>
          <div className="habit-frequency__date">
            <div className="habit-frequency__date-name">Sun</div>
            <HabitIndicator className="habit-frequency__date-value"/>
          </div>
        </div>
        <BaseButton className="add-page__field add-field" size="sm" theme="white">
          <p className="add-field__title">Reminder</p>
          <div className="add-field__link">
            10:00AM
            <BaseIcon icon="chevron-right"/>
          </div>
        </BaseButton>
        <div className="add-page__field add-page__field--last add-field">
          <p className="add-field__title">Notification</p>
          <div>10:00AM</div>
        </div>
        <section className="add-page__footer habit-banner">
          <img className="habit-banner__icon"  src={require('./habit-icon.png').default} alt="" />
          <h2 className="habit-banner__title">Start this habit</h2>
          <p className="habit-banner__description">
            A new habit will help you archieve your goals.
          </p>
        </section>
      </main>
    )
  }
}