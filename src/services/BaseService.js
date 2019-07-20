import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

{/*|| process.env.REACT_APP_LOCAL_URL*/}

const http = axios.create({
  baseURL: `${API_URL}`,
  withCredentials: true
})

http.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 403 || error.response.status === 401) {
      localStorage.clear()
      window.location.assign('/login');
    } else {
      return Promise.reject(error)
    }
  }
)

export default http;