import axios from 'axios';

const http = axios.create({
    baseURL: "https://switch-yam-equator.azurewebsites.net/api/movies"
});


export default {
    getAllMovies() {
        return http.get();
    }
}