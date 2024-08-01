import React from 'react'
import "./Home.css"
import Navigation from './Navigation'
import HomeContent from './HomeContent'
import Footer from './Footer'
import News from './News'
import ReviewBox from './ReviewBox'
import ReviewedContentCard from './ReviewedContentCard'
import NewsForm from './NewsForm'

const Home = () => {
  return (
    <div>
        
        {/* <News/> */}
        <HomeContent/>
        {/* <Footer/> */}
        {/* <News/>
        <ReviewBox/> */}
        {/* <ReviewedContentCard/> */}
        {/* <NewsForm/> */}
    </div>
  )
}

export default Home