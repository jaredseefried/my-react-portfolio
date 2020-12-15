import React from 'react'
import '../Group/group.css'
import chatApp from '../../images/chat-app.jpg'
import empDir from '../../images/employee-directory.jpg'
import burger from '../../images/eat-da-burger.jpg'
import weather from '../../images/weather-dashboard.jpg'


function Individual() {
  return (
    <div className="individual-container col-12">
      <div className="row">
        <div className="row mx-auto">
          {/* <h1 className="h1-title display-3">Individual Projects</h1> */}
        </div>
        <div className="row cards">
          <div className="col-3 card-div">
            <div className="card portfolio-card align-middle">
              <img className="card-img-top" src={chatApp} alt="" />
              <div className="card-body body-card">
                <h5 className="card-title port-card-title">Chat Application</h5>
                <a href="https://my-socketio-chat-app.herokuapp.com/" target="_blank" rel="noreferrer" className="card-text port-card-text">A real time chat application using Express and Socket.io</a>
              </div>
            </div>
          </div>
          <div className="col-3 card-div">
            <div className="card portfolio-card align-middle">
              <img className="card-img-top" src={empDir} alt="" />
              <div className="card-body body-card">
                <h5 className="card-title port-card-title">Employee Directory</h5>
                <a href="https://my-employee-directory-react.herokuapp.com/" target="_blank" rel="noreferrer" className="card-text port-card-text">The directory is built on React and uses class components to utilize states. Requires the use of .map and .sort methods using arrays. </a>
              </div>
            </div>
          </div>
          <div className="col-3 card-div">
            <div className="card portfolio-card align-middle">
              <img className="card-img-top" src={burger} alt="" />
              <div className="card-body body-card">
                <h5 className="card-title port-card-title">Eat-Da-Burger</h5>
                <a href="https://east-da-burger-mvc.herokuapp.com/" target="_blank" rel="noreferrer" className="card-text port-card-text">A burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. I create a MVC design pattern to separate information.</a>
              </div>
            </div>
          </div>
          <div className="col-3 card-div">
            <div className="card portfolio-card align-middle">
              <img className="card-img-top" src={weather} alt="" />
              <div className="card-body body-card">
                <h5 className="card-title port-card-title">Weather Dashboard</h5>
                <a href="https://jaredseefried.github.io/weather-dashboard/" target="_blank" rel="noreferrer" className="card-text port-card-text">The dashboard calls a third party API (openweathermap.com) to show current weather when a user searches for a city. Searches are saved in a history panel. </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Individual