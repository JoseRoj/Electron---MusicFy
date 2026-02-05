import React from "react";
import "./LoggedLayout.scss";
import { LeftMenu, TopBar, Footer } from "../../components/Layout";

export const LoggedLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="logged-layout">
      <div className="logged-layout__content">
        <div className="logged-layout__left-menu">
          <LeftMenu />
        </div>
        <div className="logged-layout__children-content">
          <div className="logged-layout__top-bar">
            <TopBar></TopBar>
          </div>
          <div> {children}</div>
        </div>
      </div>
      <div className="logged-layout__footer">
        <Footer></Footer>
      </div>
    </div>
  );
};
