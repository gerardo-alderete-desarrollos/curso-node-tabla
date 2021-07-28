const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {
    try {
        let salida = '', consola = '';

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} ${'x'.red} ${index} ${'='.red} ${ base * index }\n`;
            consola += `${base} ${'x'} ${index} ${'='} ${ base * index }\n`;
        }
        
        if( listar ) {
            console.log('------------'.green);
            console.log('TABLA DEL:'.green, colors.cyan(base));
            console.log('------------'.green);
            console.log(salida);
        }
   
        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);
        return `tabla-${base}.txt creada`
    } catch (error) {
        throw 'no se guardo correctamente el archivo';
    }
}

module.exports = {
    crearArchivo
}