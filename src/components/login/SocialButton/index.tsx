import { toClassname } from "../../../helpers/utils";
import BaseButton from "../../base/BaseButton";
import { basePropsType } from "../../base/props";
import './index.scss';

type SocialButtonType = {
  type: 'google' | 'facebook',
  short?: boolean
} & basePropsType

export default function SocialButton(props: SocialButtonType) {
  let text = '';
  if(props.type === 'google') {
    text = props.short ? 'Google' : 'Continue with Google';
  } else if(props.type === 'facebook') {
    text = props.short ? 'Facebook' : 'Continue with Facebook';
  }
  const className = toClassname([
    props.className, 
    'social-button', 
    'social-button--' + props.type, 
    {
      'social-button--short': props.short
    }
  ]);

  return (
  <BaseButton className={className} theme="white" size="sm" type="button">
    <div className="social-button__icon">
      <img 
        src={require(`../../../assets/icons/${props.type}.svg`).default} 
        alt={props.type + ' icon'}
      />
    </div>
    {text}
  </BaseButton>
  );
}