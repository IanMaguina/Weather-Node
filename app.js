const lugar = require('./place/place');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion / nombre de la ciudad',
        demand: true
    }
}).argv;

let getInfo = async() => {
    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temperatura = await clima.getClima(coors.lat, coors.lng);

        return `la temperatura en ${ coors.direccion } es de ${ temperatura } ° `;
    } catch (e) {
        return `no se pudo determinar el clima en ${ argv.direccion } `;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));



/* lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));

clima.getClima(-12.1082827, -76.9718671)
    .then(temp => console.log(temp))
    .catch(e => console.log(e)); */