import http from './BaseService';

const saveBeat = beat => http.post('/beats/', beat)

const listBeats = () => http.get('/beats/')

const userBeats = id => http.get(`/users/${id}/beats/`)

const getProfile = id => http.get(`/users/${id}`)

export default { saveBeat, listBeats, userBeats, getProfile }