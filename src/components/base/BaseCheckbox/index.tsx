import React from "react"
import { toClassname } from "../../../helpers/utils";
import { checkboxPropsType } from "../props";
import './index.scss'

export default class BaseCheckbox extends React.Component<checkboxPropsType> {
  state = {
    checked: this.props.value
  }
  onInput = (e: any) => {
    this.setState(() => ({
      checked: !this.props.value
    }))
    this.props.onInput({
      name: this.props.name,
      value: !this.props.value
    });
  }
  render() {
    const className = toClassname([
      'base-checkbox',
      this.props.className,
      {
        'base-checkbox--checked': this.props.value
      }
    ])
    return (
      <label className={className}>
        <input checked={this.props.value} name={this.props.name} type="checkbox" onChange={this.onInput}/>
        {this.props.children}
      </label>
    );
  }
}