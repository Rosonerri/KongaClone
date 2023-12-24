import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Routes/MainRouter';

const App = () => {
  return (
    <div>
      <RouterProvider
      router={Router}
      />
    </div>
  )
}

export default App;
