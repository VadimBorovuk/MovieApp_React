import React from 'react';
import './style.scss'
import {useAuth} from "../hooks/useAuth/use-auth";
import ContentView from "../components/ContentView/ContentView";
import {Navigate} from "react-router-dom";

const MainLayout = () => {
  const {isAuth} = useAuth()
  return (
      <div className="root-layout">
        <div className="content">
          {isAuth ? <ContentView/> : <Navigate to="/login"/>}
        </div>
      </div>
  );
};

export default MainLayout;
