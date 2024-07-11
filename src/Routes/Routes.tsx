import MainLayout from '@/components/Layout/MainLayout';
import Home from '@/pages/Home';
import Product from '@/pages/Product';
import ProductDetails from '@/pages/ProductDetails';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
          {
              path:'/',
              element:<Home></Home>
          },
          {
           path:'/products',
           element:<Product/>
          },
          {
           path:'/product/:id',
           element:<ProductDetails/>
          },
      ]
    },
    {
      path:'*',
      element: <Error></Error>
    }
  ]);