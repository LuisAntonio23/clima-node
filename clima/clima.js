const axios = require('axios');

const getClima = async(lat, lng) => {

    let resultado = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=89b75b2ad85d23d54cec4064288ecb66`);

    return resultado.data.main.temp;
}

module.exports = {
    getClima
}