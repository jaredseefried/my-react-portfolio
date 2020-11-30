import React from 'react'
import { BiPlusMedical } from 'react-icons/bi'
import './frontEndDev.css'

function FrontEndDev() {
  return (
    <div className="frontEndDev-container col-12">
      
        <h1 className="col-12 text-center front-end-title">Front End Development</h1>
        <div className="row mx-auto">
          <div className="imgs col-5">
            <img src="https://cdn.acodez.in/wp-content/uploads/2020/01/banner-2.jpg" className="js-img mx-auto" alt="..." />
            <BiPlusMedical className="plus-icon" />
            <img src="https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg" className="react-img mx-auto" alt="..."></img>
          </div>
          <div className="col-6">
            <p className="react-text"> React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is developed by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.</p>

          </div>
        </div>
      
    </div>
  )
}

export default FrontEndDev