import React from "react";
import './home.css'
import Header from "../../components/Header/Header.js"

function Home() {


  return (
    <div className="home container-fluid col-12">
      <Header />
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 card-div">
           <div className="card home-card">
            <img className="card-img-top" src="https://d9qtyz43wogdd.cloudfront.net/pixpacom/images/homebanner-image.jpg" alt="" />
            <h5 className="card-title">Development</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/front-end-dev" className="btn btn-primary">Go There!</a>
          </div> 
        </div>
        {/*<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 card-div">
          <div className="card home-card">
            <img className="card-img-top" src="https://hireoutsource.com//Blog_images/Best_Javascript_framework1.jpg" alt="" />
            <h5 className="card-title">Back End Development</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/back-end-dev" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>*/}
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 card-div">
          <div className="card home-card">
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78PFP5HuGD5BJUhCqnY4crXgoTcCJP7_yJA&usqp=CAU" alt="" />
            <h5 className="card-title">Portfolio</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/portfolio" className="btn btn-primary">Go There!</a>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 card-div">
          <div className="card home-card">
            <img className="card-img-top" src="https://previews.123rf.com/images/279photo/279photo1705/279photo170501991/81032796-client-support-service-workdesk-with-contact-us-signs-dark-background-top-view-mockup.jpg" alt="" />
            <h5 className="card-title title-card">Contact</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/contact" className="btn btn-primary">Go There!</a>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Home;
