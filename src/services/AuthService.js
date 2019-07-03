import http from './BaseService';

const register = user => http.post('/register', user)

const login = credentials => http.post('/login', credentials)

const logout = () => http.post('/logout')

export default { register, login, logout }