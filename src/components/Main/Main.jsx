import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";
import MembersIcon from '../../icons/members.svg';
import OnlineIcon from '../../icons/online.svg';

const Main = () => {
  const [searchValue, setSearchValue] = React.useState(0);
  const [stateSearch, setStateSearch] = React.useState(false);

  React.useEffect(() => {
    if (searchValue.length > 0) {
      setStateSearch(true);
    } else {
      setStateSearch(false);
    }
  }, [searchValue]);

  return (
    <main className="main">
      <div className="main__header">
        <div
          className={
            stateSearch === true
              ? "main__header__wrapper-search hide"
              : "main__header__wrapper-search"
          }
        >
          <input
            className="main__header-search"
            placeholder="Explore"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div className="main__content">
        <Link to="/" className="main__banner">
          <h2 className="main__banner-text">Find Your Community <br/> on Daccord</h2>
        </Link>
        <section className="main__section">
          <div className="main__section__header">
            <h3 className="main__section-title">Featured Community</h3>
            <Link to="/" className="main__section-link">See all</Link>
          </div>
          <div className="main__wrapper-cards">
            <Link to="/" className="main__card">
              <img src="/img/Avatar-channel.png" className="main__card-img" />
              <div className="main__card-content">
                <h4 className="main__card-title">Virtual Reality</h4>
                <p className="main__card-description">A community for VR and novices alike, regular and friendly chat.</p>
              </div>
              <div className="row">
                <div className="col">
                  <img src={OnlineIcon} className="main__card-icon" />
                  <p className="main__card-online">0 Online</p>
                </div>
                <div className="col">
                  <img src={MembersIcon} className="main__card-icon" />
                  <p className="main__card-online">0 Members</p>
                </div>
              </div>
            </Link>
            <Link to="/" className="main__card">
              <img src="/img/Avatar-channel.png" className="main__card-img" />
              <div className="main__card-content">
                <h4 className="main__card-title">Virtual Reality</h4>
                <p className="main__card-description">A community for VR and novices alike, regular and friendly chat.</p>
              </div>
              <div className="row">
                <div className="col">
                  <img src={OnlineIcon} className="main__card-icon" />
                  <p className="main__card-online">0 Online</p>
                </div>
                <div className="col">
                  <img src={MembersIcon} className="main__card-icon" />
                  <p className="main__card-online">0 Members</p>
                </div>
              </div>
            </Link>
            <Link to="/" className="main__card">
              <img src="/img/Avatar-channel.png" className="main__card-img" />
              <div className="main__card-content">
                <h4 className="main__card-title">Virtual Reality</h4>
                <p className="main__card-description">A community for VR and novices alike, regular and friendly chat.</p>
              </div>
              <div className="row">
                <div className="col">
                  <img src={OnlineIcon} className="main__card-icon" />
                  <p className="main__card-online">0 Online</p>
                </div>
                <div className="col">
                  <img src={MembersIcon} className="main__card-icon" />
                  <p className="main__card-online">0 Members</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section className="main__section">
          <div className="main__section__header">
            <h3 className="main__section-title">Featured Community</h3>
            <Link to="/" className="main__section-link">See all</Link>
          </div>
          <div className="main__wrapper-cards">
            <Link to="/" className="main__card">
              <img src="/img/Avatar-channel.png" className="main__card-img" />
              <div className="main__card-content">
                <h4 className="main__card-title">Virtual Reality</h4>
                <p className="main__card-description">A community for VR and novices alike, regular and friendly chat.</p>
              </div>
              <div className="row">
                <div className="col">
                  <img src={OnlineIcon} className="main__card-icon" />
                  <p className="main__card-online">0 Online</p>
                </div>
                <div className="col">
                  <img src={MembersIcon} className="main__card-icon" />
                  <p className="main__card-online">0 Members</p>
                </div>
              </div>
            </Link>
            <Link to="/" className="main__card">
              <img src="/img/Avatar-channel.png" className="main__card-img" />
              <div className="main__card-content">
                <h4 className="main__card-title">Virtual Reality</h4>
                <p className="main__card-description">A community for VR and novices alike, regular and friendly chat.</p>
              </div>
              <div className="row">
                <div className="col">
                  <img src={OnlineIcon} className="main__card-icon" />
                  <p className="main__card-online">0 Online</p>
                </div>
                <div className="col">
                  <img src={MembersIcon} className="main__card-icon" />
                  <p className="main__card-online">0 Members</p>
                </div>
              </div>
            </Link>
            <Link to="/" className="main__card">
              <img src="/img/Avatar-channel.png" className="main__card-img" />
              <div className="main__card-content">
                <h4 className="main__card-title">Virtual Reality</h4>
                <p className="main__card-description">A community for VR and novices alike, regular and friendly chat.</p>
              </div>
              <div className="row">
                <div className="col">
                  <img src={OnlineIcon} className="main__card-icon" />
                  <p className="main__card-online">0 Online</p>
                </div>
                <div className="col">
                  <img src={MembersIcon} className="main__card-icon" />
                  <p className="main__card-online">0 Members</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
