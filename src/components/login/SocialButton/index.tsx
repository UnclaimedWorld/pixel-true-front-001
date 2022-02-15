import { toClassname } from "../../../helpers/utils";
import BaseButton from "../../base/BaseButton";
import { basePropsType } from "../../base/props";
import './index.scss';

type SocialButtonType = {
  type: 'google' | 'facebook',
} & basePropsType

export default function SocialButton(props: SocialButtonType) {
  let text = '';
  if(props.type === 'google') {
    text = 'Continue with Google';
  } else if(props.type === 'facebook') {
    text = 'Continue with Facebook';
  }
  const className = toClassname([props.className, 'social-button', 'social-button--' + props.type]);

  return (
  <BaseButton className={className} theme="white" size="sm">
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