import './App.css';
import Buttons from './components/buttons/Buttons';
import CheckBoxes from './components/checkboxes/CheckBoxes';
import Inputs from './components/inputs/Inputs';
import MainContent from './components/main/MainContent';
import Selects from './components/selects/Selects';
import SideNav from './components/sidenav/SideNav';

function App() {
  return (
    <div className="flex">
      <SideNav />
      <MainContent>
        <Buttons />
        <CheckBoxes />
        <Selects />
        <Inputs />
      </MainContent>
    </div>
  );
}

export default App;
