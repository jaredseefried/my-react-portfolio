import axios from 'axios'

export default {
  getContacts: function () {
    return axios.get("/api/contacts")
  },

  contactForm: function (data) {
    return axios.post("/api/contacts", data)
  }
}