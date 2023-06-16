import React from "react";
import { Link } from "react-router-dom";
import Mail from "../../icons/Mail.svg";
import Chat from "../../icons/Chat.svg";
import Bell from "../../icons/Bell.svg";
import Setting from "../../icons/Setting.svg";
import InstIcon from "../../icons/Inst.svg";
import TwitterIcon from "../../icons/Twitter.svg";
import "./ProfileSidebar.scss";

const ProfileSidebar = () => {
  return (
    <div className="profile-sidebar">
      <div className="profile-sidebar__header">
        <ul className="profile-sidebar__header-nav">
          <li className="profile-sidebar__header-nav__item">
            <img
              src={Mail}
              alt="Mail"
              className="profile-sidebar__header-nav__item--icon"
            />
          </li>
          <li className="profile-sidebar__header-nav__item">
            <img
              src={Chat}
              alt="Chat"
              className="profile-sidebar__header-nav__item--icon"
            />
          </li>
          <li className="profile-sidebar__header-nav__item">
            <img
              src={Bell}
              alt="Bell"
              className="profile-sidebar__header-nav__item--icon"
            />
          </li>
          <li className="profile-sidebar__header-nav__item">
            <img
              src={Setting}
              alt="Setting"
              className="profile-sidebar__header-nav__item--icon"
            />
          </li>
        </ul>
      </div>
      <div className="profile-sidebar__content">
        <div className="profile-sidebar__profile">
          <div className="profile-sidebar__wrapper-img">
            <img
              src="/img/UserProfile.png"
              width={124}
              height={124}
              className="profile-sidebar__profile-img"
            />
          </div>
          <h3 className="profile-sidebar__profile-name">Sophie Fortune</h3>
          <h4 className="profile-sidebar__profile-id">@sophiefortune</h4>
        </div>
        <div className="profile-sidebar__section members">
          <div className="section__header">
            <h3 className="section__title">New Members</h3>
            <Link to="/" className="section__link">See all</Link>
          </div>
          <div className="section__empty">
            <h3 className="section__empty-text">No members</h3>
          </div>
        </div>
        <div className="profile-sidebar__section">
          <div className="section__header">
            <h3 className="section__title">My Socials</h3>
          </div>
          <ul className="section__list">
            <li className="section__list-item">
              <Link to="/" className="section__item-link">
                <img src={InstIcon} className="section__item-img" />
                <h3 className="section__item-title">@aksondesign</h3>
              </Link>
            </li>
            <li className="section__list-item">
              <Link to="/" className="section__item-link">
                <img src={TwitterIcon} className="section__item-img" />
                <h3 className="section__item-title">@aksonvady</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
