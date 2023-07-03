import React from "react";
import "./MenuSidebar.scss";
import LogoProfile from "../../icons/Logo.svg";
import ExploreGroup from "../../icons/Explore-group.svg";
import AddIconGroup from "../../icons/IconAddChannel-group.svg";
import Explore from "../../icons/Explore.svg";
import Music from "../../icons/Music.svg";
import Gaming from "../../icons/Game.svg";
import Tech from "../../icons/Tech.svg";
import Education from "../../icons/Education.svg";
import Student from "../../icons/Student.svg";
import Entertainment from "../../icons/Entertainment.svg";
import AddFriend from "../../icons/AddFriend.svg";
import Mic from "../../icons/Mic.svg";
import Headphones from "../../icons/Headphones.svg";
import { Tooltip } from "react-tooltip";

const MenuSidebar = () => {
  const [toggleMic, setToggleMic] = React.useState(false);
  const [toggleHeadphones, setToggleHeadphones] = React.useState(false);
  return (
    <div className="menu-sidebar">
      <div className="menu-sidebar__top">
        <div className="wrapper__channels">
          <div
            className="wrapper__logo"
            data-tooltip-id="personalChats"
            data-tooltip-content="Personal chats"
          >
            <Tooltip id="personalChats" />
            <img src={LogoProfile} alt="profile image" className="logo-img" />
          </div>
          <ul className="channel-list">
            <li
              className="channel-list__item active"
              data-tooltip-id="explore"
              data-tooltip-content="Explore"
            >
              <Tooltip id="explore" />
              <img
                src={ExploreGroup}
                alt="explore"
                className="channel-list__item-img"
              />
            </li>
            <li
              className="channel-list__item"
              data-tooltip-id="addChanel"
              data-tooltip-content="Add channel"
            >
              <Tooltip id="addChanel" />
              <img
                src={AddIconGroup}
                alt="add channel"
                className="channel-list__item-img"
              />
            </li>
          </ul>
        </div>
        <div className="wrapper__menu">
          <h2 className="menu-sidebar__title">Explore</h2>
          <ul className="menu-list">
            <li className="menu-list__item active">
              <img
                className="menu-sidebar__item-icon"
                src={Explore}
                alt="Home"
              />
              Home
            </li>
            <li className="menu-list__item">
              <img
                className="menu-sidebar__item-icon"
                src={Music}
                alt="Music"
              />
              Music
            </li>
            <li className="menu-list__item">
              <img
                className="menu-sidebar__item-icon"
                src={Gaming}
                alt="Gaming"
              />
              Gaming
            </li>
            <li className="menu-list__item">
              <img
                className="menu-sidebar__item-icon"
                src={Education}
                alt="Education"
              />
              Education
            </li>
            <li className="menu-list__item">
              <img
                className="menu-sidebar__item-icon"
                src={Tech}
                alt="Science & Tech"
              />
              Science & Tech
            </li>
            <li className="menu-list__item">
              <img
                className="menu-sidebar__item-icon"
                src={Entertainment}
                alt="Entertainment"
              />
              Entertainment
            </li>
            <li className="menu-list__item">
              <img
                className="menu-sidebar__item-icon"
                src={Student}
                alt="Student Hubs"
              />
              Student Hubs
            </li>
          </ul>
        </div>
      </div>
      <div className="menu-sidebar__bottom">
        <div className="waveform"></div>
        <div className="setting-conference">
          <button className="setting-conference__profile">
            <img
              src="/img/AvatarProfile.png"
              alt="Ваш аватар"
              className="setting-conference__profile-img"
            />
            <h4 className="setting-conference__profile-name">sophiefortune</h4>
          </button>
          <button
            className={
              toggleMic
                ? "setting-conference--button mic active"
                : "setting-conference--button mic"
            }
            data-tooltip-id="mic"
            data-tooltip-content={toggleMic ? "Off microphone" : "On microphone"}
            onClick={() => setToggleMic(!toggleMic)}
          >
            <Tooltip id="mic" />
            <img
              src={Mic}
              alt="Microphone"
              className="setting-conference__button-icon"
            />
          </button>
          <button
            className={
              toggleHeadphones
                ? "setting-conference--button active"
                : "setting-conference--button"
            }
            data-tooltip-id="headphones"
            data-tooltip-content={
              toggleHeadphones ? "Off headphones" : "On headphones"
            }
            onClick={() => setToggleHeadphones(!toggleHeadphones)}
          >
            <Tooltip id="headphones" />
            <img
              src={Headphones}
              alt="Headphones"
              className="setting-conference__button-icon"
            />
          </button>
          <button
            className="setting-conference--button"
            data-tooltip-id="addFriend"
            data-tooltip-content="Add friend"
          >
            <Tooltip id="addFriend" />
            <img
              src={AddFriend}
              alt="Add friend"
              className="setting-conference__button-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuSidebar;
