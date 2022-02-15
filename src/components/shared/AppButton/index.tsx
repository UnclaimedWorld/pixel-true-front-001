import BaseButton from "../../base/BaseButton";
import { buttonProps } from "../../base/props";

export default function AppButton(props: buttonProps) {
  return <BaseButton className={['app-button', props.className].join(' ')} {...props}/>
}