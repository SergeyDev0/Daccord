import React from "react"
import MenuSidebar from '../components/MenuSidebar/MenuSidebar';
import Main from "../components/Main/Main";
import ProfileSidebar from "../components/ProfileSidebar/ProfileSidebar";
import Loader from "../components/Loader/Loader";

const Home = () => {
  return (
    <>
      <Loader />
      <MenuSidebar />
      <Main />
      <ProfileSidebar />
    </>
  )
};

export default Home;
