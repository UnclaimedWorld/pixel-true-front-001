import { imagePropsType } from "../props"
import { createElement } from "react"

export default function BaseImage(props: imagePropsType) {
  return createElement('img', props, '');
}