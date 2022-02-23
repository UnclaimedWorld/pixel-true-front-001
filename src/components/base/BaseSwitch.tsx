import React from 'react';
import styled from 'styled-components';

type SwitchType = any;

const Container = styled.label<SwitchType>`
display: block;
background: rgba(87, 51, 83, 0.1);
border-radius: 15px;
padding: 7px;
width: 54px;
height: 30px;
position: relative;
&:before {
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  width: 22px;
  height: 22px;
  background: #573353;
  box-shadow: -2px 3px 6px rgba(87, 51, 83, 0.5);
  border-radius: 11px;
  transform: ${props => props.value ? 'translateX(24px)' : 'none'};
}
&:after {
  display: block;
  content: '${props => props.value ? 'On' : 'Off'}';
  transform: ${props => props.value ? 'none' : 'translateX(25px)'};
  font-weight: bold;
  font-size: 10px;
  line-height: 14px;
}
`
const Input = styled.input.attrs((props: SwitchType) => ({
  type: 'checkbox',
  checked: props.checked
}))`
opacity: 0;
pointer-events: none;
position: absolute;
z-index: -10;
`

export default class BaseSwitch extends React.Component<SwitchType> {
  onInput = (e: any) => {
    console.log(!this.props.value);
    this.props.onInput({
      name: this.props.name,
      value: !this.props.value
    });
  }
  render() {
    console.log(this.props.value)
    return <Container value={this.props.value}>
      <Input checked={this.props.value} onChange={this.props.onInput}/>
    </Container>
  }
}