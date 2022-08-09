
const http = require('http');

http.createServer( (req, res) => {

    // req lo que se esta solicitando al servidor

    // res.writeHead(200, { 'Content-Type': 'application/json' })
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, { 'Content-Type': 'application/csv' })

    // const persona = {
    //     id: 1,
    //     name: 'Jona'
    // }
    // res.write(JSON.stringify(persona));
    
    // response es la respuesta que le daremos a la peticion
    // res.write('id, nombre\n');
    // res.write('1, Jorge\n');
    // res.write('2, Fernando\n');
    // res.write('3, Maria\n');
    // res.write('4,  Juan\n');
    res.write('Hola Mundo')
    res.end()

})
.listen(8080)

console.log('Escuchando en el puerto ', 8080);
