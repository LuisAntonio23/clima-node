const clima = require('./clima/clima');
const lugar = require('./lugar/lugar');
const argv = require('./config/yargs').argv;

let informacion = async(direccion) => {
    let infolugar = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(infolugar.lat, infolugar.lng);

    return `el clima en ${infolugar.direccion} es de ${temp}`;
}



informacion(argv.direccion).then(resp => {
    console.log(resp);
}).catch(e => {
    console.log(e);
})