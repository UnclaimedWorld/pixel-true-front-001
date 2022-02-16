type classNameType = string | Array<any> | {[key: string]: any};
type handlerType = (e?: any) => void;

type basePropsType = {
  className?: classNameType,
  children?: any
}

export type checkboxPropsType = {
  value: boolean,
  name: string,
  onInput: handlerType,
} & basePropsType

export type iconPropsType = {
  icon: string
} & basePropsType

export type inputPropsType = {
  type?: 'text' | 'password' | 'email' | 'number',
  value: string,
  name: string,
  placeholder?: string,
  onInput: handlerType,
  icon?: string,
  theme?: 'default' | 'white',
  append?: any
} & basePropsType

export type imagePropsType = {
  src: string,
  alt?: string,
} & basePropsType

export type buttonPropsType = {
  tag?: string,
  theme?: 'white',
  size?: 'sm',
  onClick?: handlerType,
} & basePropsType

export type formPropsType = {
  onSubmit: handlerType,
} & basePropsType