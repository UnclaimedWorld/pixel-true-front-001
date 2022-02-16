import React from "react";
import { toClassname } from "../../../helpers/utils";
import BaseInput from "../../base/BaseInput";
import { inputPropsType, inputResultType } from "../../base/props";

export default class PasswordInput extends React.Component<inputPropsType> {
  state: {
    type: 'password' | 'text'
  } = {
    type: 'password'
  }
  onInput = (e: inputResultType) => {
    this.props.onInput({
      name: this.props.name,
      value: e.value
    })
  }
  toggleText = () => {
    this.setState((state: typeof this.state) => ({
      type: state.type === 'password' ? 'text' : 'password'
    }))
  }
  render() {
    return (
      <BaseInput 
        className={toClassname(this.props.className)}
        value={this.props.value} 
        name={this.props.name} 
        onInput={this.onInput} 
        type={this.state.type} 
        icon="lock"
        theme={this.props.theme}
        placeholder={this.props.placeholder || 'Password'}
        append={<div className="password-toggle" onClick={this.toggleText}>
          {this.state.type === 'password' ? 'Show' : 'Hide'}
        </div>}
      />
    )
  }
}