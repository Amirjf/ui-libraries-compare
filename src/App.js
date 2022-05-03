import { useState } from 'react';
import Buttons from './components/buttons/Buttons';
import CheckBoxes from './components/checkboxes/CheckBoxes';
import Inputs from './components/inputs/Inputs';
import MainContent from './components/main/MainContent';
import Selects from './components/selects/Selects';
import SideNav from './components/sidenav/SideNav';
import './App.css';

function App() {
  const [showSideNav, setShowSideNav] = useState(true);
  return (
    <div className="flex">
      <SideNav sideNavState={{ showSideNav, setShowSideNav }} />
      <MainContent sideNavState={{ showSideNav, setShowSideNav }}>
        <Buttons />
        <CheckBoxes />
        <Selects />
        <Inputs />
      </MainContent>
    </div>
  );
}

export default App;
