import React from 'react'
import { SiMongodb } from 'react-icons/si'
import './frontEndDev.css'
import mernLogo from '../../images/Blog-Article-MERN-Stack.png'
import mongoImg from '../../images/mongodb.jpeg'

function FrontEndDev() {
  return (
    <div className="frontEndDev-container col-12">

      <h1 className="col-12 text-center front-end-title">Full Stack Development</h1>
      <h2 className="mern-stack text-center">MERN Stack (MongoDB, Express, React and Node)</h2>
      <img src={mernLogo} className="mern-logo" alt="..." />
      <div className="mongo-section col-12">
        <div className="row col-6">
          {/* <img src={mongoImg} alt="..." /> */}
        </div>
        <div className="row col-6">
        </div>
      </div>

    </div>
  )
}

export default FrontEndDev