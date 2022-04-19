inserirRota('/ver_produtos', function(dados, respostas) {
    database('SELECT * FROM produto')
        .then(result => {
            respostas(result)
        }).catch(erro => {
            console.log('ERRO AO BUSCAR PRODUTO!')
            respostas({ erro })
        })
})

inserirRota('/marca', function(dados, respostas) {
    database('SELECT * FROM marca')
        .then(result => {
            respostas(result)
        }).catch(erro => {
            console.log('ERRO AO BUSCAR PRODUTO!')
            respostas({ erro })
        })
})

inserirRota('/adicionar_carrinho', function(dados, respostas) {
    database(`UPDATE produto set CARRINHO = 1 where codigo = "${dados.id}"`)
        .then(result => {
            respostas(result)
        }).catch(erro => {
            console.log('ERRO AO BUSCAR PRODUTO!')
            respostas({ erro })
        })
})

inserirRota('/remover_carrinho', function(dados, respostas) {
    database(`UPDATE produto set CARRINHO = 0 where codigo = "${dados.id}"`)
        .then(result => {
            respostas(result)
        }).catch(erro => {
            console.log('ERRO AO BUSCAR PRODUTO!')
            respostas({ erro })
        })
})

inserirRota('/cadastrar', function(dados, respostas) {
    database(`INSERT INTO cliente VALUES(null, "${dados.NOME}", "${dados.USER}", "${dados.EMAIL}", "${dados.SENHA}", 
    "${dados.CODIGO_ENDERECO}")`)
        .then(result => {
            respostas(result)
        }).catch(erro => {
            console.log('ERRO AO BUSCAR PRODUTO!')
            respostas({ erro })
        })
})

inserirRota('/cliente', function(dados, resposta) {
    console.log(dados);

    database('SELECT * FROM cliente')
        .then(result => {

            resposta(result);
        }).catch(erro => {

            resposta({ message: 'Erro ao inserir o usuário!' });
        });

});


inserirRota("/endereco", function(dados, resposta) {
    database(
            `INSERT INTO ENDERECO VALUES(null, "${dados.PAIS}", "${dados.ESTADO}", "${dados.CIDADE}", "${dados.BAIRRO}", "${dados.NUMERO}")`
        )
        .then((result) => {
            resposta(result);
        })
        .catch((erro) => {
            console.log("Deu ruim");
            resposta({ erro });
        });
});

inserirRota("/endereco_listar", function(dados, resposta) {
    console.log(dados);
    database(`SELECT * FROM ENDERECO`)
        .then((result) => {
            console.log("Listado");
            resposta(result);
        })
        .catch((erro) => {
            resposta({ erro });
        });
});