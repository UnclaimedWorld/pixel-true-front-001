import styled from "styled-components";

const Title = styled.section`
  font-size: 25px;
  line-height: 30px;
  text-transform: uppercase;
`
const Div = styled.div.attrs(props => ({
  tabIndex: 1,
  contentEditable: true
}))`
  width: 100px;
  height: 100px;
  background: ${(props) => props.red ? 'red' : '#ff5ff5'};
  &:hover ${Title} {
    color: green;
  }
  &:focus {
    box-shadow: 0 0 0 5px black;
  }
`
const RedTitle = styled(Title)`
  color: red;
`
const ReversedTitle = (props: any) => <Div>{props.children.toString().split('').reverse().join('')}</Div>

export default function Test(props: any) {
  return <Div>
    <Title>{props.children}</Title>
  </Div>
}