import axios from "axios";

const api = axios.create({
    baseURL: `https://api-node-sequelize.onrender.com`,
})

export default api;