import React from 'react'
import Layout from '../Block/Layout';
import { createBrowserRouter } from 'react-router-dom';
import HomePages from '../Pages/HomePages';
export const Router = createBrowserRouter([
    {
        path: "/", element: <Layout />,
        children:[
            {
                index: true, element: <HomePages />
            }
        ]
    }
])