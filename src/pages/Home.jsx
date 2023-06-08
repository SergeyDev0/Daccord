import React from "react"
import MenuSidebar from '../components/MenuSidebar/MenuSidebar';
import Main from "../components/Main/Main";
import ProfileSidebar from "../components/ProfileSidebar/ProfileSidebar";

const Home = () => {
  return (
    <>
      <MenuSidebar />
      <Main />
      <ProfileSidebar />
    </>
  )
};

export default Home;
