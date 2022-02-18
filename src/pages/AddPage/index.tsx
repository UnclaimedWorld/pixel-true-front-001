import React from "react";
import BaseIcon from "../../components/base/BaseIcon";
import BaseInput from "../../components/base/BaseInput";
import { inputResultType } from "../../components/base/props";

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
        <div className="add-page__field-wrap">
          <BaseInput value={this.state.name} name="name" onInput={this.onInput} placeholder="Enter habit name" theme="white"/>
        </div>
      </main>
    )
  }
}