import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HomeComponent from './Home/Home';
import MenuComponent from './Home/menu/Menu';
import Contact from './contact/Contact';
import './index.css';
import PageError from './shared/components/PageError';

const AboutComponent = lazy(() => import ('./About/About'));
const CartComponent = lazy(() => import ('./Cart/Cart'));


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
        element: <Suspense fallback={<h1>Loading...</h1>}><AboutComponent /></Suspense>
      },
      { 
        path: '/contact',
        element: <Suspense fallback={<h1>Loading...</h1>}><Contact /></Suspense>
      },
      {
        path: '/cart',
        element: <Suspense fallback={<h1>Loading...</h1>}><CartComponent /></Suspense>
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

