import { MenuUnfoldOutlined } from '@ant-design/icons';
import React from 'react';

const MainContent = ({ children, sideNavState }) => {
  const { showSideNav, setShowSideNav } = sideNavState;

  return (
    <div className={`w-full p-5 h-screen mt-8 ${showSideNav && 'pl-80'}`}>
      {!showSideNav && (
        <div
          onClick={() => setShowSideNav(!showSideNav)}
          className="absolute top-6 left-6 font-bold text-2xl cursor-pointer"
        >
          <MenuUnfoldOutlined />
        </div>
      )}
      {children}
    </div>
  );
};

export default MainContent;
