// Nuestro primer programa en NOde.js

// console.log("Hola Mundo desde Node.js");

//importando mudulos nativos
const path = require('path');
const os = require('os');
const fs = require('fs/promises');

//Usando el modulo path
console.log( 'Operaciones con rutas')

const rutaArchivo = path.join('/usarios', 'documentos', 'archivo.txt');
console.log(`Ruta completa: ${rutaArchivo}`);
console.log(`Extension: ${path.extname(rutaArchivo)}`);
console.log(`Nombre del archivo: ${path.basename(rutaArchivo)}`);
console.log(`Directorio: ${path.dirname(rutaArchivo)}`);

// usando el modulo de OS
console.log('Informacion del Sistema Operativo');
console.log(`Sistema Operativo: ${os.platform()}`);
console.log(`Arquitectura: ${os.arch()}`);
console.log(`Memoria Total: ${os.totalmem() }`);
console.log(`Memoria Libre: ${os.freemem()}`);


//creando un archivo con fs

async function trabajarConArchivos() {
    try {
        await fs.writeFile('Ejemplo.txt', 'Este es una archivo de nodejs')
        console.log('Archivo creado correctamente')

        const contenido = await fs.readFile('Ejemplo.txt', 'utf-8');
        console.log(`\nContenido del archivo: ${contenido}`);
    }
    catch (error) {
        console.error('Error al crear o leer el archivo:', error);
    }
}
trabajarConArchivos();
