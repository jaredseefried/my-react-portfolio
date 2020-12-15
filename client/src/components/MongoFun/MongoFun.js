import React from 'react'
import './mongofun.css'

function MongoFun() {
  return (
    <div className="mongoFun-container col-12">
      <div className="row">
        <div class="input-group mb-3 enter-email">
          <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <span class="input-group-text" id="basic-addon2">@gmail.com</span>
        </div>
      </div>
      <div className="row">
        <h3>Added to my Mongo Database</h3>
      </div>
    </div >
  )
}

export default MongoFun