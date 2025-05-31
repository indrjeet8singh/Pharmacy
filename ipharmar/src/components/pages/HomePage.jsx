import React from 'react'
import SwiperSlider from './SwiperSlider'
import CardList from './CardList'
import OurSolution from './OurSolution'
import HomeTestmonial from './HomeTestmonial'
import BottomSlider from './BottomSlider'
import HomeImgContainer from './HomeImgContainer'
import OurMission from './OurMission'

const HomePage = () => {
  return (
    <div className=''>
      <SwiperSlider/>
      <CardList/>
      <OurSolution/>
      <HomeTestmonial/>
      <BottomSlider/>
      <HomeImgContainer/>
      <OurMission/>
    </div>
  )
}

export default HomePage