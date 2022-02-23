import React from "react";
import BaseButton from "../../components/base/BaseButton";
import BaseIcon from "../../components/base/BaseIcon";
import BaseInput from "../../components/base/BaseInput";
import BaseSwitch from "../../components/base/BaseSwitch";
import { inputResultType } from "../../components/base/props";
import HabitFrequency, { habitValueType } from "../../components/pages/AddPage/HabitFrequency";
import './index.scss';

export default class AddPage extends React.Component {
  state = {
    name: '',
    notification: true,
    frequency: {
      sun: 0,
      mon: 0,
      tue: 0.5,
      wed: 1,
      thu: 1,
      fri: 0,
      sat: 0.5
    } as habitValueType
  }
  onInput = (e: inputResultType) => {
    console.log(e.name);
    this.setState(() => ({
      [e.name]: e.value
    }))
  }
  onFrequencyInput = (e: inputResultType) => {
    this.setState((state: typeof this.state) => ({
      frequency: {
        ...state.frequency,
        [e.name]: e.value
      }
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
        <HabitFrequency className="add-page__field" value={this.state.frequency} onClick={this.onFrequencyInput}/>
        <BaseButton className="add-page__field add-field" size="sm" theme="white">
          <p className="add-field__title">Reminder</p>
          <div className="add-field__link">
            10:00AM
            <BaseIcon icon="chevron-right"/>
          </div>
        </BaseButton>
        <div className="add-page__field add-page__field--last add-field">
          <p className="add-field__title">Notification</p>
          <BaseSwitch value={this.state.notification} name="notification" onInput={this.onInput}/>
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