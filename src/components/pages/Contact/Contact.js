import React from 'react'
import './contact.css'
import GitHubButton from 'react-github-btn'
import { AiOutlineLinkedin } from 'react-icons/ai'

function Contact() {


  return (
    <div className="contact-container">
      <div className="card contact-card">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img className="contact-img" src="https://media.istockphoto.com/photos/emails-with-blurred-city-lights-picture-id1134247993?k=6&m=1134247993&s=612x612&w=0&h=dzlvudQgSYvf4NIul9d61zJ9OhoJp2kNqpq_kzhxgjQ=" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body card-div-contact">
              <h3 className="card-title contact-title">Contact Me</h3>
              <img className="profile-pic" src="https://media-exp1.licdn.com/dms/image/C4D03AQENlNjfEIoPPA/profile-displayphoto-shrink_200_200/0?e=1612396800&v=beta&t=06h6r51Q-TsFfTBawlWya48P1r38hefhWy6nZmK_5eo" alt="..." />
              <div className="contact-info">
                <h6 className="info">Jared Seefried</h6>
                <h6 className="info">303-638-4230</h6>
                <h6 className="info">jared.seefried@yahoo.com</h6>
              </div>
              <div className="github-btn" >
                <GitHubButton href="https://github.com/jaredseefried" data-color-scheme="no-preference: light; light: dark; dark: dark;" data-size="large" aria-label="Follow @jaredseefried on GitHub">Follow @jaredseefried</GitHubButton>
              </div>
              <div className="linkedIn-div">
                <button type="button" className="linkedIn-btn">
                  <AiOutlineLinkedin className="linkedIn-icon" />
                  <p className="p-btn">Connect with me on LinkedIn</p>
                </button>
              </div>
              <div className="form contact-form">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Name</span>
                  </div>
                  <input type="text" className="form-control" />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Email</span>
                  </div>
                  <input type="text" className="form-control" />
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Subject</span>
                  </div>
                  <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Contact