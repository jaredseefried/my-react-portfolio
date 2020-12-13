import React from 'react'
import pandemicTracker from '../../images/pandemic-tracker.jpg'
import shelfIndulgence from '../../images/shelf-indulgence.jpg'
import mealMatcher from '../../images/meal-matcher.jpg'
import './group.css'


function Group() {
  return (
    <div className="group-container col-12">
      <div className="row">
        <h1 className="h1-title mx-auto display-3">Group Projects</h1>
      </div>
      <div className="row col-12">
        <div className="col-4 card-div">
          <div className="card portfolio-card">
            <img className="card-img-top" src={pandemicTracker} alt="" />
            <div className="card-body body-card">
              <h5 className="card-title port-card-title">Pandemic Tracker</h5>
              <a href="https://my-pandemic-tracker.herokuapp.com/" rel="noreferrer" target="_blank" className="card-text port-card-text">A MERN (Mongo, Express, React and Node) Application using React-Globe and API's to show updated stats on Covid-19. </a>          
            </div>
          </div>
        </div>
        <div className="col-4 card-div">
          <div className="card portfolio-card">
            <img className="card-img-top" src={shelfIndulgence} alt="" />
            <div className="card-body body-card">
              <h5 className="card-title port-card-title">Shelf Indulgence</h5>
              <p className="card-text port-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
        </div>
        <div className="col-4 card-div">
          <div className="card portfolio-card align-middle">
            <img className="card-img-top" src={mealMatcher} alt="" />
            <div className="card-body body-card">
              <h5 className="card-title port-card-title">Meal Matcher</h5>
              <p className="card-text port-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Group