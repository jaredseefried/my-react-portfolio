import axios from 'axios'
// import nodemailer from 'nodemailer'

export default {
  getContacts: function () {
    return axios.get("/api/contacts")
  },

  contactForm: function (data) {
    return axios.post("/api/contacts", data)
  },
}