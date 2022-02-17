import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import BaseImage from "../../components/base/BaseImage";
import './index.scss';
import '@splidejs/splide/dist/css/splide.min.css';

const AppHeader = function() {
  return (
    <header className="header">
      <h1 className="header__heading">Homepage</h1>
      <BaseImage className="header__avatar" src="/avatar-01.jpg" alt="avatar"/>
    </header>
  )
}

export default class HomePage extends React.Component {
  render() {
    const datesListOptions = {
      gap: 6,
      arrows: false,
      pagination: false,
      fixedWidth: 50,
      height: 50,
      perMove: 1,
      padding: { right: 20 }
    }
    const habitsListOptions = {
      gap: 6,
      arrows: false,
      pagination: false,
      fixedWidth: 50,
      height: 50,
      perMove: 1,
      padding: { right: 20 }
    }
    const datesList = [
      {
        name: 'sun',
        value: 17
      },
      {
        name: 'mon',
        value: 18
      },
      {
        name: 'tue',
        value: 19
      },
      {
        name: 'wed',
        value: 20
      },
      {
        name: 'thu',
        value: 21
      },
      {
        name: 'thu',
        value: 21
      },
      {
        name: 'thu',
        value: 21
      },
      {
        name: 'thu',
        value: 21
      },
      {
        name: 'thu',
        value: 21
      },
    ].map(date => (
      <SplideSlide className="dates-list__item">
        <p className="dates-list__name">{date.name}</p>
        <p className="dates-list__value">{date.value}</p>
      </SplideSlide>
    ))
    const habitsList = [
      {
        name: 'Read a Book',
        percent: [1, 1, 0.5, 0.5, 1]
      },
      {
        name: 'Exercise',
        percent: [1, 1, 0.5, 0.5]
      },
      {
        name: 'Wake Up Early',
        percent: [1, 1, 0.5]
      },
      {
        name: 'Walk Dog',
        percent: [1, 1, 0.5, 0.5, 1]
      },
      {
        name: 'Read a Book',
        percent: [1, 1, 0.5, 0.5, 1]
      },
      {
        name: 'Exercise',
        percent: [1, 1, 0.5, 0.5]
      },
      {
        name: 'Wake Up Early',
        percent: [1, 1, 0.5]
      },
      {
        name: 'Walk Dog',
        percent: [1, 1, 0.5, 0.5, 1]
      },
      {
        name: 'Read a Book',
        percent: [1, 1, 0.5, 0.5, 1]
      },
      {
        name: 'Exercise',
        percent: [1, 1, 0.5, 0.5]
      },
      {
        name: 'Wake Up Early',
        percent: [1, 1, 0.5]
      },
      {
        name: 'Walk Dog',
        percent: [1, 1, 0.5, 0.5, 1]
      },
      {
        name: 'Read a Book',
        percent: [1, 1, 0.5, 0.5, 1]
      },
      {
        name: 'Exercise',
        percent: [1, 1, 0.5, 0.5]
      },
      {
        name: 'Wake Up Early',
        percent: [1, 1, 0.5]
      },
      {
        name: 'Walk Dog',
        percent: [1, 1, 0.5, 0.5, 1]
      },
    ].map(habit => (
      <section className="home-page__habit-item habit-item">
        <p className="habit-item__title">{habit.name}</p>
        <Splide className="habit-item__list" options={habitsListOptions}>
          {
            habit.percent.map(percent => (
              <SplideSlide className="habit-indicator"></SplideSlide>
            ))
          }
        </Splide>
      </section>
    ))
    return(
      <main className="home-page">
        <AppHeader/>
        <section className="home-page__banner home-banner">
          <h2 className="home-banner__title">
            We first make our habits,<br/> and then our habits<br/> makes us.
          </h2>
          <p className="home-banner__subtitle">- anonymous</p>
        </section>
        <section className="home-page__dates-list dates-list">
          <p className="dates-list__title">Habits</p>
          <Splide className="dates-list__list" options={datesListOptions}>{datesList}</Splide>
        </section>
        <div>
          {habitsList}
        </div>
      </main>
    )
  }
}