import axios from "axios";

const api = axios.create({
    baseURL: `https://myapi-sequelize.herokuapp.com/clients`,
})

export default api;