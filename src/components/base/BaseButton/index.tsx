import React from "react"
import { toClassname } from "../../../helpers/utils";
import { buttonPropsType } from "../props";
import './index.scss';

export default function BaseButton (props: buttonPropsType) {
  const tag = props.tag || 'button';
  const className = toClassname([
    props.className, 
    'app-button', 
    {
      ['app-button--theme-' + props.theme]: props.theme,
      ['app-button--size-' + props.size]: props.size,
    }
  ]);
  return React.createElement(tag, {...props, className}, props.children);
}