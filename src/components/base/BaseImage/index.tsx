import { imageProps } from "../props"

export default function BaseImage(props: imageProps) {
  console.log('../../..' + props.src);
  let src = require('../../..' + props.src);
  return <img className={props.className} src={src} alt={props.alt || ''}/>
}