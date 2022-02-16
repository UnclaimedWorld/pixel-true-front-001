import React from "react";
import BaseImage from "../../components/base/BaseImage";
import './index.scss';

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
    const habitsList = [
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
    ].map(habit => (
      <li className="dates-list__item">
        <p className="dates-list__name">{habit.name}</p>
        <p className="dates-list__value">{habit.value}</p>
      </li>
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
          <ul className="dates-list__list">{habitsList}</ul>
        </section>
        <section className="habit-item">
          <p className="habit-item__title">Read A Book</p>
          <ul className="habit-item__list">
            <li className="habit-item__item"></li>
          </ul>
        </section>
      </main>
    )
  }
}