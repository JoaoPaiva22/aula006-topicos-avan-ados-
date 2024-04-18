exercicionode.js

exports.minhaInformacao = "Joao Vitor Paiva";

exports.dbuserxpto = "RGM 35548096";

exports.dbpass = "senha1234"; 







arquivo.js

var http = require('http');

var fyleSystem = require('fs');



http.createServer(function (req, res) {

  fyleSystem.readFile('./primeironome-rgm-numeroRgm.html', function (err, data) {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(data);

    return res.end()

  });

}).listen(8080);