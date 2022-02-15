import BaseButton from "../base/BaseButton";

type SocialButtonType = {
  type: 'google' | 'facebook',
  className?: string
};

export default function SocialButton(props: SocialButtonType) {
  let text = '';
  if(props.type === 'google') {
    text = 'Continue with Google';
  } else if(props.type === 'facebook') {
    text = 'Continue with Facebook';
  }
  return <BaseButton className={props.className} children={text}/>
}