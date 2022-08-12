import axios from 'axios';

//Base da URL: https://api.themoviedb.org/3/
//URL da API: /movie/now_playing?api_key=b9a438bcdf223bc1d365417039231b3e&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;