const connection = require("../db");

let sqlTable = {
    database: "CREATE TABLE cadastro;" ,
    create: "CREATE TABLE cadastro (id int auto_increment, nome_empresa varchar(255) not null, username varchar(255) not null, email varchar(255) not null, cidade varchar(100) not null, pais varchar(155) not null, chave_estr varchar(255) not null, senha varchar(255) not null, about varchar(255), primary key(id));",
    drop: "DROP DATABASE cadastro;",
};

function createDatabase(){
    connection.query(sqlTable.database, (err, response ) => {
        console.log(response, err);
    });
};

function createTableUsers(){ // cria tabelas
    connection.query( sqlTable.create, (err, response) => {
        console.log(response, err);
    });
};


function dropTableUsers(){ // exclui tabelas
    connection.query( sqlTable.drop, (err, results) => {
        console.log({erro: err, resultado: results});
    });
};



