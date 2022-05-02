import './App.css';
import Buttons from './components/buttons/Buttons';
import CheckBoxes from './components/checkboxes/CheckBoxes';
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
      </MainContent>
    </div>
  );
}

export default App;
