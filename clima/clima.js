const axios = require('axios');


const getClima = async(lat, lng) => {

    let rpta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=ea40c4e37140fc165f431880b32bb402`);

    if (rpta.data.id === '400') {
        throw new Error(` No hay resultados para las coordenadas dadas: ${lat}, ${lng}`);
    }
    return rpta.data.main.temp;


}


module.exports = {
    getClima
}