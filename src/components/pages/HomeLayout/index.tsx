import React from "react";
import { Outlet } from "react-router-dom";
import './index.scss';

export default class HomeLayout extends React.Component {
  render() {
    return (
      <div className="home-layout">
        <Outlet/>
        345
      </div>
    )
  }
}