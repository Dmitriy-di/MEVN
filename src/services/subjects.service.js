import { request } from './generic.service'

const getSubject = (id) => request({ url: `subjects_/${id}`, method: 'get' })

const getSubjects = () => request({ url: `subjects_`, method: 'get' })

export { getSubject, getSubjects }
