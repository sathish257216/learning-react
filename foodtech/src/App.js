import { Outlet } from 'react-router-dom';
import './App.css';
import HeaderComponent from './shared/components/Header';
import { useEffect, useState } from 'react';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './store/store';


const App = () => {
  const [userInfo, setUserInfo] = useState();
  
  useEffect(() => {
    //Login and set auth username
    setUserInfo({ userName: 'Sathish'})
  }, [])
  console.log('App');
  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={{userName: userInfo?.userName, setUserInfo}}>
          <div className="app-container">
            <HeaderComponent />
            <Outlet />
          </div>
        </UserContext.Provider>
      </Provider>
    </>
  );
}


export default App;
