
const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebar
app.set('view engine', 'hbs');
// asi se usan los middlewares
hbs.registerPartials(__dirname + '/views/partials');
// servir contenido estatico

app.use( express.static('public') );
// app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/public/index.html')
// })

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Jona',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    // res.sendFile(__dirname + '/public/generic.html')
    res.render('generic', {
        nombre: 'Jona',
        titulo: 'Generic'
    })
})

app.get('/elements', (req, res) => {
    // res.sendFile(__dirname + '/public/elements.html')
    res.render('elements', {
        nombre: 'Jona',
        titulo: 'Elements'
    })
    
})

app.get('/hola-mundo', (req, res) => {

    res.send('Hola Mundo en su respectiva ruta');
})


app.get('*', (req, res) => {

    res.sendFile(__dirname + '/public/backup/404.html');
})

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
})






