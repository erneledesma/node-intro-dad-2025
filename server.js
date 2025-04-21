
// importar express
// import express from 'express';
const { timeStamp } = require('console');
const express = require('express');
//crear una app con Express
const app = express();

//definor el puerto
const PORT = 5050;

//definir la ruta de la app
app.get('/', (req, res) => {
    res.json({
        message: 'Hola Mundo desde Express',
        status: 'ok',
        timeStamp: new Date().toISOString(),
    })
})

// ruta de users
    app.get('/api/users', (req, res) => {
        const users = [
            { id: 1, name: 'Juan' },
            { id: 2, name: 'Pedro' },
            { id: 3, name: 'Maria' },
        ]
        res.json({users})
    });


// iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
