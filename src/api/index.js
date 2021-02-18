import axios from 'axios'

const baseUrl = 'http://localhost:5000/'

export default {
    postTask(url = baseUrl)
    {
        return {
            fetchAll: async () => await axios.get(url),
            fetchById: async (id) => await axios.get(url + id),
            create: async (newTask) => await axios.post(url, newTask),
            update: async (id, updatedTask) => await axios.put(url + id, updatedTask),
            delete: async (id) => await axios.delete(url + id)
        }
    },

    postPortfolio(url = baseUrl +  `portfolio`)
    {
        return {
            fetchAll: async () => await axios.get(url),
            fetchById: async (id) => await axios.get(url + id),
            create: async (newPortfolio) => await axios.post(url + 'addPortfolio', newPortfolio),
            update: async (id, updatedPortfolio) => await axios.put(url + id, updatedPortfolio),
            delete: async (id) => await axios.delete(url + id)
        }
    },

    postUser(url = baseUrl +  `user`)
    {
        return {
            fetchAll: async () => await axios.get(url),
            fetchById: async (id) => await axios.get(url + id),
            create: async (newUser) => await axios.post(url + 'addPortfolio', newUser),
            update: async (id, updatedUser) => await axios.put(url + id, updatedUser),
            delete: async (id) => await axios.delete(url + id)
        }
    }
}