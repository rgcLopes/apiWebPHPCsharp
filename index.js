
var express = require('express'); //import do express  
var app = express();    //criar um objeto do express

//ponto de acesso : endpoint
// request é uma requisição (Ex: Email, senha)
// response é a resposta do servidor (Ex: Acessar email)
app.get('/', function (request, response) {  
  response.send('Renan Geronimo!');
});

// 3000 - A porta que o node irá expor
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
