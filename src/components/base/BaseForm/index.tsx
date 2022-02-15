import React, { SyntheticEvent } from "react";
import { formPropsType } from "../props";

export default class BaseForm extends React.Component<formPropsType> {
  onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    this.props.onSubmit();
  }
  render() {
    return React.createElement('form', {...this.props, onSubmit: this.onSubmit}, this.props.children);
  }
}