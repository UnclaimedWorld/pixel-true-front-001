import React, { SyntheticEvent } from "react";
import { formProps } from "../props";

export default class BaseForm extends React.Component<formProps> {
  constructor(props: formProps) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e: SyntheticEvent) {
    e.preventDefault();
    this.props.onSubmit();
  }
  render() {
    return <form onSubmit={this.onSubmit}>{this.props.children}</form>
  }
}