const connection = require("../database/db");

module.exports = {

    // AQUI A FUNÇÃO APENAS AUTENTICA CASO O USUARIO E A SENHA ESTEJAM CORRETOS retornando o id, nome e chave da empresa
    async auth(req, res){
        let { username, password } = req.body;

        await connection.query(`SELECT * FROM cadastro WHERE nome_empresa = "${username}" and senha = "${password}"`, 
        (err, results) => {
            if(err){
                res.send("Houve um erro ao logar, tente novamente");
                console.log(err);
            } else if(!err){
                let { id, nome_empresa, chave_estr } = results[0];
                res.send({id: id, nome_empresa: nome_empresa, chave_estr: chave_estr, isAuth: true});
            };
        });
    },
};