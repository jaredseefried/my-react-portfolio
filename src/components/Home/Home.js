import React from "react";
import './home.css'

function Home() {


  return (
    <div className="home container-fluid col-12">
      <div className="row">

        <div className="col-3 card-div">
          <div className="card home-card">
            <img className="card-img-top" src="https://d9qtyz43wogdd.cloudfront.net/pixpacom/images/homebanner-image.jpg" alt="" />
            <h5 class="card-title">Front End Development</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="col-3 card-div">
          <div className="card home-card">
            <img className="card-img-top" src="https://d9qtyz43wogdd.cloudfront.net/pixpacom/images/homebanner-image.jpg" alt="" />
            <h5 class="card-title">Back End Development</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="col-3 card-div">
          <div className="card home-card">
            <img className="card-img-top" src="https://d9qtyz43wogdd.cloudfront.net/pixpacom/images/homebanner-image.jpg" alt="" />
            <h5 class="card-title">Portfolio</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="col-3 card-div">
          <div className="card home-card">
            <img className="card-img-top" src="https://d9qtyz43wogdd.cloudfront.net/pixpacom/images/homebanner-image.jpg" alt="" />
            <h5 class="card-title title-card">Contact</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Home;
