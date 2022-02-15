import SVG from 'react-inlinesvg';
import { toClassname } from '../../../helpers/utils';
import { iconPropsType } from '../props';
import './index.scss';

export default function BaseIcon(props: iconPropsType) {
  const className = toClassname(['app-icon', props.className]);
  return <SVG className={className} src={require('../../../assets/icons/' + props.icon + '.svg').default}/>
}