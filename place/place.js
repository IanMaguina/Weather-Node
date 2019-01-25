const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encondedUrl = encodeURI(direccion);

    let rpta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encondedUrl }&key=AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA`);

    if (rpta.data.status === 'ZERO_RESULTS') {
        throw new Error(` No hay resultados para la ciudad : ${direccion}`);
    }

    //console.log(JSON.stringify(rpta.data, undefined, 2));
    let location = rpta.data.results[0];
    let coords = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }
}


module.exports = {
    getLugarLatLng
}