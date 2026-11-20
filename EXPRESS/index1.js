// Importa o módulo express
const express = require('express');
const app = express();

//Define a porta que o servidor ira escutar
 const port = 3000;

 //Rota principal (GET /)
 app.get('/' , (req,res) => {
    //Envia uma resposta JSON com a mensagem
    res.json({ mensagem:"Alo mundo"}) // .json() ja finaliza a resposta
 });

 // Inicia o servidor e escuta na porta especiaficada
 app.listen(3000,() =>{
 console.log('Servidor rodando em http://localhost:3000')
 });
