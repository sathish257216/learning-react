import { Outlet } from 'react-router-dom';
import './App.css';
import HeaderComponent from './shared/components/Header';


const App = () => {
  return (
    <>
      <div className="app-container">
        <HeaderComponent />
        <Outlet />
      </div>
    </>
  );
}


export default App;
