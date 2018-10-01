 const axios = require('axios');

 // let encodedURL = encodeURI(argv.direccion);
 // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyCh4Zx1RHNup9vahzSp1yX0EqGOysWhwts`)
 //     .then(resp => {
 //         // console.log(resp.data);
 //         // console.log(resp.status);

 //         console.log(`Direccion: ${resp.data.results[0].formatted_address}`);
 //         console.log(`Lat: ${resp.data.results[0].geometry.location.lat}`);
 //         console.log(`Lng: ${resp.data.results[0].geometry.location.lng}`);
 //     }).catch(e => {
 //         console.log(e);
 //     })

 const getLugarLatLng = async(direccion) => {
     let encodedURL = encodeURI(direccion);
     let resultado = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyCh4Zx1RHNup9vahzSp1yX0EqGOysWhwts`);
     if (resultado.data.status === 'ZERO_RESULTS') {
         throw new Error(`No hay resultados para la ciudad ${direccion}`)
     }

     let location = resultado.data.results[0];
     let coors = location.geometry.location;

     return {
         direccion: location.formatted_address,
         lat: coors.lat,
         lng: coors.lng
     }
 }

 module.exports = {
     getLugarLatLng
 }