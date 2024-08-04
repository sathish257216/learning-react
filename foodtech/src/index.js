import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeComponent from './Home/Home';
import AboutComponent from './About/About';
import CartComponent from './Cart/Cart';
import PageError from './shared/components/pageError';
import MenuComponent from './Home/Menu';


const appRoute = createBrowserRouter([
  {
    path: '/', 
    element: <App />,
    errorElement: <PageError />,    
    children: [
      { 
        path: '', 
        element: <HomeComponent />
      },
      { 
        path: '/about',
        element: <AboutComponent />
      },
      {
        path: '/cart',
        element: <CartComponent />
      },
      {
        path: '/menu/:resId',
        element: <MenuComponent />
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRoute}/>
  </React.StrictMode>
);

