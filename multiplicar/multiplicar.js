//requireds
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let tabla = '';

        for (let i = 1; i <= 12; i++) {

            tabla += `${base} * ${i} = ${base * i}\n`;

        }

        const data = new Uint8Array(Buffer.from(tabla));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`Tabla-${base}-al-${limite}.txt`);
        });

    });
}

let listarTabla = (base, limite = 10) => {

    console.log('=========================='.green);
    console.log(`====tabla de ${base}====`.green);
    console.log('=========================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }

}

module.exports = {

    crearArchivo,
    listarTabla

}