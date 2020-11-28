import React from 'react'
import './portfolio.css'

function Portfolio() {


  return (
    <div className="portfolio container-fluid col-12">
      <div className="row">
        <h1 className="h1-title mx-auto display-3">Group Projects</h1>
      </div>
      <div className="row">
        <div className="col-3 mx-auto">
          <div className="card portfolio-card">
            <img className="card-img-top" src="https://d9qtyz43wogdd.cloudfront.net/pixpacom/images/homebanner-image.jpg" alt="" />
            <div className="card-body body-card">
              <h5 class="card-title">Front End Development</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
            </div>
          </div>
        </div>
        <div className="col-3 mx-auto">
          <div className="card portfolio-card">
            <img className="card-img-top" src="https://d9qtyz43wogdd.cloudfront.net/pixpacom/images/homebanner-image.jpg" alt="" />
            <div className="card-body body-card">
              <h5 class="card-title">Front End Development</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
            </div>
          </div>
        </div>
        <div className="col-3 mx-auto">
          <div className="card portfolio-card align-middle">
            <img className="card-img-top" src="https://d9qtyz43wogdd.cloudfront.net/pixpacom/images/homebanner-image.jpg" alt="" />
            <div className="card-body body-card">
              <h5 class="card-title">Front End Development</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Portfolio