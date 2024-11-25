import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// import Home from './Home'
import Projects from './Projects'
import { HomePage } from './pages'
import HomeOutput from './HomeOutput'
import AboutMe from './About'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <HomeOutput />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "about",
        element: <AboutMe />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
