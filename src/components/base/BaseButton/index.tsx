import React from "react"
import { buttonProps } from "../props";

export default function BaseButton (props: buttonProps) {
  const tag = props.tag || 'button';
  return React.createElement(tag, props, props.children);
}