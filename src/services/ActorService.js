import axios from 'axios';

const http = axios.create({
    baseURL: "https://switch-yam-equator.azurewebsites.net/api/actors",
    headers: {
        'x-chmura-cors' : '19c313ce-6e7e-460a-b62c-0fc5128b3498'
    }
});

export default {
    getAllActors() {
        return http.get()
    }
}

