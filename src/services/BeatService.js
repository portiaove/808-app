import http from './BaseService';

const saveBeat = beat => http.post('/beats/', beat)

const listBeats = () => http.get('/beats/')

const userBeats = id => http.get(`/users/${id}/beats/`)

const getProfile = id => http.get(`/users/${id}`)

const likeBeat = beatId => http.post(`/beats/${beatId}/like`)

const dislikeBeat = beatId => http.delete(`/beats/${beatId}/like`)

const checkIfLiked = beatId => http.get(`/beats/${beatId}/like`)

export default { saveBeat, listBeats, userBeats, getProfile, likeBeat, dislikeBeat, checkIfLiked }