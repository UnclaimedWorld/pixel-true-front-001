import React from 'react';
import styled from 'styled-components';
import { toClassname } from '../../../helpers/utils';
import { basePropsType, handlerType } from '../../base/props';
import HabitIndicator from '../HabitIndicator';

const Title = styled.div`
  margin: 0;
  border-bottom: 1px solid #FFF3E9;
  width: 100%;
  padding: 17px 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
`
const DateWrap = styled.div`
  margin: 0;
  width: calc(100% / 7);
  border-right: 1px solid #FFF3E9;
  padding: 10px 8px 16px;
  &:last-child {
    border-right: 0;
  }
`
const DateName = styled.div`
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 10px;
  line-height: 13px;
  opacity: 0.5;
  text-transform: uppercase;
  text-align: center;
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #FFFFFF;
  border-radius: 12px;
`
const Indicator = styled(HabitIndicator)`
  width: 38px;
  height: 38px;
`
export type dateType = 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';
export type frequencyType = 0 | 0.5 | 1;
export type habitValueType = {
  [key in dateType]: frequencyType
};
const datesArray:dateType[] = [
  'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'
];
type HabitFrequencyType = {
  value: habitValueType,
  onClick: handlerType
} & basePropsType;

export default class HabitFrequency extends React.Component<HabitFrequencyType> {
  onClick = (date: dateType) => {
    let value = 0;
    switch(this.props.value[date]) {
      case 0: value = 0.5; break;
      case 0.5: value = 1; break;
      case 1: value = 0; break;
    }
    this.props.onClick({
      name: date,
      value: value 
    });
  }
  render() {
    const dateWrapArray = datesArray.map((date) => (
      <DateWrap onClick={this.onClick.bind(this, date)}>
        <DateName>{ date }</DateName>
        <Indicator half={this.props.value[date] === 0.5} empty={this.props.value[date] === 0}/>
      </DateWrap>
    ));

    return (
      <Container className={toClassname(this.props.className)}>
        <Title>Habit Frequency</Title>
        { dateWrapArray }
      </Container>
    )
  }
}