type className = string;
type handler = () => void;

type baseProps = {
  className?: className
}

export type imageProps = {
  src: string,
  alt?: string,
} & baseProps

export type buttonProps = {
  children?: any,
  tag?: string,
  onClick?: handler,
} & baseProps

export type formProps = {
  children?: any,
  onSubmit: handler,
} & baseProps