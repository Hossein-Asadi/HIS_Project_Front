import axios from "axios"

const ISDEVELOPMODE = process.env.NODE_ENV !== 'production'

const django_api_url = 'http://localhost:8000'

export const base_url = ISDEVELOPMODE ? django_api_url : ''

// export const axios = require('axios')
// axios.defaults.headers.common = {
//   Authorization: `Bearer ` + window.authtoken,
//   'Content-Type': 'application/json',
//   'Access-Control-Allow-Origin': '*',
// }

export default{
  auth: {
    djangologin(username, password) {
      return axios({
        method: 'post',
        url: `${base_url}/api/login/`,
        data: {
          username,
          password
        }
      })
    },
    djangoSignUp(data) {
      return axios({
        method: 'post',
        url: `${base_url}/api/register/`,
        data: data
      })
    },
    tokenVerify(data) {
      return axios({
        method: 'post',
        url: `${base_url}/api/token/verify/`,
        data: data
      })
    }
  },
  calender: {
    searchAll() {
      return axios({
        method: 'get',
        url: `${base_url}/api/calender/`,
      })
    },
    search(expertise) {
      return axios({
        method: 'post',
        url: `${base_url}/api/calender/`,
        data: {expertise: expertise}
      })
    },
    getDoctorFreeTimes(doctorID) {
      return axios({
        method: 'get',
        url: `${base_url}/api/calender/appointment/`,
        params: {id: doctorID}
      })
    },
    setAppointment(data) {
      return axios({
        method: 'post',
        url: `${base_url}/api/calender/appointment/`,
        data: data
      })
    }
  },
  getUserInfo(userId) {
    return axios({
      method: 'get',
      url: `${base_url}/api/userinfo/`,
      params: {id: userId}
    })
  },
  changeUserInfo(data) {
    return axios({
      method: 'post',
      url: `${base_url}/api/userinfo/`,
      data: data
    })
  }
}