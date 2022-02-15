import React from "react";
import { toClassname } from "../../../helpers/utils";
import BaseIcon from "../BaseIcon";
import { inputPropsType } from '../props';
import './index.scss';

export default class BaseInput extends React.Component<inputPropsType> {
  state = {
    focused: false
  }
  onFocus = () => {
    this.setState(() => ({
      focused: true
    }));
  }
  onBlur = () => {
    this.setState(() => ({
      focused: false
    }));
  }
  render() {
    const props = this.props as any;
    const className = toClassname([
      'app-input', 
      this.props.className,
      {
        'app-input--focused': this.state.focused
      }
    ]);
    const parsedAttrs = {} as {[key: string]: any};
    ['name', 'value', 'placeholder'].forEach(attr => parsedAttrs[attr] = props[attr])
    const icon = this.props.icon ? <BaseIcon className="app-input__icon" icon={this.props.icon}/> : null;
    return (
      <label 
        className={className}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      >
        {icon}
        <input 
          {...parsedAttrs} 
          type={this.props.type || 'text'} 
          onInput={this.props.onInput}
        />
      </label>
    )
  }
}