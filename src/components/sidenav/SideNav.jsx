import { MenuFoldOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({ sideNavState }) => {
  const { showSideNav, setShowSideNav } = sideNavState;

  return (
    <div
      className={`${
        showSideNav ? 'w-72 inset-0' : 'w-0 -left-96'
      } border-r-2 h-screen fixed`}
    >
      <div className="border-b-2 h-20 flex justify-center items-center relative">
        <h2 className="text-grey text-3xl">Ui Compare</h2>
        <div
          onClick={() => setShowSideNav(!showSideNav)}
          className="absolute top-0 right-0 font-bold text-2xl cursor-pointer"
        >
          <MenuFoldOutlined />
        </div>
      </div>
      <div className="p-10">
        <ul className="list-disc">
          <Link to="buttons">
            <li>
              <p>Buttons</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
