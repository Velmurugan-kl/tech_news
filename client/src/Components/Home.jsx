import React from 'react'
import "./Home.css"
import ResponsiveAppBar from './Navigation'
import HomeContent from './HomeContent'

const Home = () => {
  return (
    <div>
        <ResponsiveAppBar/>
        <HomeContent/>
    </div>
  )
}

export default Home