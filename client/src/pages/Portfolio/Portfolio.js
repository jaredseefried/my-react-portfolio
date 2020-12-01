import React from 'react'
import './portfolio.css'
import Group from '../../components/Group/Group'
import Individual from '../../components/Individual/Individual'

function Portfolio() {


  return (
    <div className="portfolio-container">
      <Group />
      <Individual />
    </div>
  )
}

export default Portfolio