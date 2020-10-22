import axios from 'axios'

const baseUrl = 'http://localhost:3005'

const getAll = async (suburl) => {
    const response = await axios.get(`${baseUrl}/${suburl}`)
    return response.data
}

const createNew = async (data, suburl) => {
    const response = await axios.post(`${baseUrl}/${suburl}`, data)
    return response.data
}

export default { getAll, createNew}
