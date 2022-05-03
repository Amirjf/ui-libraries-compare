import { useState, useRef } from 'react';
import Buttons from './components/buttons/Buttons';
import CheckBoxes from './components/checkboxes/CheckBoxes';
import Inputs from './components/inputs/Inputs';
import MainContent from './components/main/MainContent';
import Selects from './components/selects/Selects';
import SideNav from './components/sidenav/SideNav';
import Avatars from './components/avatars/Avatars';
import Tables from './components/tables/Tables';

import './App.css';
function App() {
  const [showSideNav, setShowSideNav] = useState(true);
  const inputRef = useRef();
  const getSubject = useRef();

  function handleBackClick(e) {
    console.log(getSubject);
    inputRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="flex">
      <SideNav
        handleBackClick={handleBackClick}
        sideNavState={{ showSideNav, setShowSideNav }}
        getSubject={getSubject}
      />
      <MainContent sideNavState={{ showSideNav, setShowSideNav }}>
        <Buttons />
        <CheckBoxes />
        <Selects />
        <Inputs inputRef={inputRef} />
        <Avatars />
        <Tables />
      </MainContent>
    </div>
  );
}

export default App;
