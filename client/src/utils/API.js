import axios from 'axios'

export default {
  getContacts: function () {
    return axios.get("/api/contacts")
  },

  contactForm: function (data) {
    return axios.post("/api/contacts", data)
  },

  sendMessage: function(data){
    return axios.post("/api/sendMail", data)
     .then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
        
      }
    })
  }
}