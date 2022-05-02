import './App.css';
import Buttons from './components/buttons/Buttons';
import MainContent from './components/main/MainContent';
import SideNav from './components/sidenav/SideNav';

function App() {
  return (
    <div className="flex">
      <SideNav />
      <MainContent>
        <Buttons />
      </MainContent>
    </div>
  );
}

export default App;
