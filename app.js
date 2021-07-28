

const { crearArchivo } = require('./helpers/multiplicar');
const argv  = require('./config/yargs');
const colors = require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h )
    .then( msg => console.log(msg.rainbow))
    .catch( error => console.log(error));
