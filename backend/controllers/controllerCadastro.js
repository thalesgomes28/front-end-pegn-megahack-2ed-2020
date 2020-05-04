const connection = require("../database/db");

module.exports = {

    // Aqui cadastra empresas
    async create(req, res){
        let { empresa_name, username, email, cidade, pais, chave_estr, senha, about} = req.body;

        // CHAVE ESTRANGEIRA CHAVE_ESTR SERÁ GERADA AUTOMATICAMENTE
        await connection.query(`
        INSERT INTO 
        cadastro(id, nome_empresa, username, email, cidade, pais, chave_estr, senha, about) 
        VALUES 
        (default, "${empresa_name}", "${username}", "${email}", "${cidade}", "${pais}", "${chave_estr}", "${senha}", "${about}");`, (err, results) => {

            if(err == null){
                res.send("Tudo certo!");
                console.log({response: results});
            } else {
                res.send("Ocorreu um erro!");
                console.log({erro: err});
            };
        });
    },

    // aqui lista as empresas cadastradas
    async index(req, res){
        await connection.query("SELECT * FROM cadastro;", (err, results) => {
            console.log(err, results);
            if(results == ""){
                res.send("Não há nada cadastrado");             
            } else {
                res.send(results);
            };
        });
    },


/*     // Aqui deleta as pessoas cadastradas
    async delete(req, res){

        let { id } = req.body;

        await connection.query(`DELETE FROM cadastro WHERE id = ${id};`, (err, results) => {
            if(!err){
                res.send("deletado com sucesso");
                console.log(results);
            } else {
                res.send("Houve um erro ao deletar");
                console.log(err);
            };
        });
    },
 */

    async alter(req, res){
        let { username, email, cidade, pais, chave_estr } = req.body;

        // CHAVE ESTRANGEIRA COL_ESTR SERÁ GERADA AUTOMATICAMENTE
        await connection.query(`
        UPDATE cadastro SET username="${username}", email="${email}", cidade="${cidade}", pais="${pais}", chave_estr="${chave_estr}");`, (err, results) => {
            if(err == null){
                res.send("Tudo certo!");
                console.log({response: results});
            } else {
                res.send("Ocorreu um erro!");
                console.log({erro: err});
            };
        });
    },
}