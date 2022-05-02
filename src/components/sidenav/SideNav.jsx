import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className="w-72 border-r-2 h-screen inset-0">
      <div className="border-b-2 h-20 flex justify-center items-center">
        <h2 className="text-grey text-3xl">Ui Compare</h2>
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
