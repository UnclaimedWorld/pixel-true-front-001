import { classNameType } from "../components/base/props";

export const toClassname = (className: classNameType = ''): string => {
  if(Array.isArray(className)) {
    return className.map(cls => toClassname(cls)).join(' ');
  }
  if(typeof className === 'object') {
    return Object.keys(className).filter(cls => className[cls]).join(' ');
  }
  return className;
}