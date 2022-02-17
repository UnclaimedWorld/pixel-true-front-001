import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { toClassname } from "../../../helpers/utils";
import './index.scss';

export default class HomeLayout extends React.Component {
  render() {
    const footerLinks = [
      {
        icon: 'home',
        link: '/home'
      },
      {
        icon: 'courses',
        link: '/courses'
      },
      {
        icon: 'community',
        link: '/community'
      },
      {
        icon: 'settings',
        link: '/settings'
      },
    ].map(({icon, link}) => (
      <NavLink className={({isActive}: any) => toClassname( ['footer__link', { 
        'footer__link--active': isActive
      }])} to={ link }>
        <img src={require(`../../../assets/images/${icon}-icon.svg`).default} alt=""/>
      </NavLink>
    ))
    return (
      <div className="home-layout">
        <Outlet/>
        <footer className="footer">
          <Link className="footer__add" to="/"></Link>
          <nav className="footer__wrap">
            {footerLinks}
          </nav>
        </footer>
      </div>
    )
  }
}