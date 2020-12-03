import axios from 'axios'

export default {
  contactForm: function(data){
    return axios.post("/api/contact")
  }
}