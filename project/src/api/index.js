const ISDEVELOPMODE = process.env.NODE_ENV !== 'production'

const django_api_url = 'http://localhost:8000'

export const base_url = ISDEVELOPMODE ? django_api_url : ''

export const axios = require('axios')
axios.defaults.headers.common = {
  Authorization: `Bearer ` + window.authtoken,
  'Content-Type': 'application/json'
}

export default{
  auth: {
    djangologin(username, password) {
      return axios({
        method: 'post',
        url: `${base_url}/api/token/`,
        data: {
          username,
          password
        }
      })
    }
  },
  django: {
    
  }
}