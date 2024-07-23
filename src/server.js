var express = require('express');

var app = express();

//configurando o servidor para usar o EJS
app.set('view engine', 'ejs');

//passando o caminho da pasta da views
app.set('views', './src/views');

//mostrando a pagina index.ejs
app.get('/', function (request, response) {
    response.render('index');
});

//rota de adicionar
app.get('/adicionar', function (request, response) {
    response.render('adicionar');
});

//iniciando o servidor 
app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});
