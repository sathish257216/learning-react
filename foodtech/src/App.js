import './App.css';
import HomeComponent from './Home/Home';
import HeaderComponent from './shared/components/Header';


const App = () => {
  return (
    <div className="app-container">
      <HeaderComponent />
      <HomeComponent />
    </div>
  );
}

export default App;
