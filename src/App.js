import { useState, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Buttons from './components/buttons/Buttons';
import CheckBoxes from './components/checkboxes/CheckBoxes';
import Inputs from './components/inputs/Inputs';
import MainContent from './components/main/MainContent';
import Selects from './components/selects/Selects';
import SideNav from './components/sidenav/SideNav';
import Avatars from './components/avatars/Avatars';
import Tables from './components/tables/Tables';

// const Login = React.lazy(() => import('./containers/auth'));

import './App.css';
import Alerts from './components/alerts/Alerts';
import Tabs from './components/tabs/Tabs';
import Lists from './components/lists/Lists';
function App() {
  const [showSideNav, setShowSideNav] = useState(true);

  return (
    <div className="flex">
      <SideNav sideNavState={{ showSideNav, setShowSideNav }} />
      <MainContent sideNavState={{ showSideNav, setShowSideNav }}>
        <Routes>
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/checkboxes" element={<CheckBoxes />} />
          <Route path="/selects" element={<Selects />} />
          <Route path="/avatars" element={<Avatars />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/inputs" element={<Inputs />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/lists" element={<Lists />} />
        </Routes>
      </MainContent>
    </div>
  );
}

export default App;
