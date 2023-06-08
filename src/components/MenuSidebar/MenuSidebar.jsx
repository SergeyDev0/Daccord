import React from "react"
import "./MenuSidebar.scss"
import Explore from '../../icons/Explore.svg'
import Music from '../../icons/Music.svg'
import Gaming from '../../icons/Game.svg'
import Tech from '../../icons/Tech.svg'
import Education from '../../icons/Education.svg'
import Student from '../../icons/Student.svg'
import Entertainment from '../../icons/Entertainment.svg'

const MenuSidebar = () => {
  return (
    <div className="menu-sidebar">
      <div className="wrapper__channels">
        <div className="wrapper__logo">
          <img src="/img/Logo.png" alt="profile image" className="logo-img" />
        </div>
        <ul className="channel-list">
          <li className="channel-list__item active">
            <img src="/img/Explore.png" alt="explore" className="channel-list__item-img" />
          </li>
          <li className="channel-list__item">
            <img src="/img/IconAddChannel.png" alt="add channel" className="channel-list__item-img" />
          </li>
        </ul>
      </div>
      <div className="wrapper__menu">
        <h2 className="menu-sidebar__title">Explore</h2>
        <ul className="menu-list">
          <li className="menu-list__item active">
            <img className="menu-sidebar__item-icon" src={Explore} alt="Home" />
            Home
          </li>
          <li className="menu-list__item">
            <img className="menu-sidebar__item-icon" src={Music} alt="Music" />
            Music
          </li>
          <li className="menu-list__item">
            <img className="menu-sidebar__item-icon" src={Gaming} alt="Gaming" />
            Gaming
          </li>
          <li className="menu-list__item">
            <img className="menu-sidebar__item-icon" src={Education} alt="Education" />
            Education
          </li>
          <li className="menu-list__item">
            <img className="menu-sidebar__item-icon" src={Tech} alt="Science & Tech" />
            Science & Tech
          </li>
          <li className="menu-list__item">
            <img className="menu-sidebar__item-icon" src={Entertainment} alt="Entertainment" />
            Entertainment
          </li>
          <li className="menu-list__item">
            <img className="menu-sidebar__item-icon" src={Student} alt="Student Hubs" />
            Student Hubs
          </li>
        </ul>
      </div>
    </div>
  )
};

export default MenuSidebar;
