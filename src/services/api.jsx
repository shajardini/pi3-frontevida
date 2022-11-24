import axios from 'axios'


//https://posicaoevida.herokuapp.com/


    const api = axios.create({
        baseURL: 'https://posicaoevida.herokuapp.com/'
    })//parte que não vai mudar

export default api