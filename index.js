const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')


//Config
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars' )
    //Conexão com Banco
    const sequelize = new Sequelize('test', 'root', 'admin',{
        host: "localhost"
        dialect: "mysql"
    })
    //Rotas
    app.get('/cad', function(req, res){
        res.render('formulario')
    })


    


app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});


































/*PROBLEMA COM NODEMON:


npm install -g nodemon
npm install --save-dev nodemo
npm config get prefix
set PATH=%PATH%;C:\Artur\Hello Word\AppData\Roaming\npm;*/