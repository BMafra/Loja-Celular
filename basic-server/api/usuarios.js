inserirRota('/ver_produtos', function(dados, respostas) {
    database('SELECT * FROM PRODUTO')
        .then(result => {
            respostas(result)
        }).catch(erro => {
            console.log('ERRO AO BUSCAR PRODUTO!')
            respostas({ erro })
        })
})



// inserirRota('/login', function(dados, resposta) {
//     console.log(dados);

//     database(`SELECT * FROM USER WHERE NICKNAME = "${dados.nickname}" AND PASSWORD = "${dados.password}" LIMIT 1`)
//         .then(result => {
//             console.log('result:', result);
//             resposta({ user: result[0] });
//         }).catch(erro => {

//             resposta({ erro: 'Erro ao buscar o usuário!' });
//         });

// });


inserirRota('/cliente', function(dados, resposta) {
    console.log(dados);

    database('SELECT * FROM cliente')
        .then(result => {

            resposta(result);
        }).catch(erro => {

            resposta({ message: 'Erro ao inserir o usuário!' });
        });

});

// inserirRota('/criar_usuario', function name(dados, resposta) {
//     console.log(dados);

//     if (!dados.nome) {
//         return resposta({ erro: 'É necassário preencher o nome' });
//     }

//     if (!dados.nickname) {
//         return resposta({ erro: 'É necassário preencher o nickname' });
//     }

//     database(`INSERT INTO USER (
//         NOME, NICKNAME
//         ) VALUES
//         (
//         "${dados.nome}", 
//         "${dados.nickname}"
//         )`)
//         .then(result => {
//             console.log('Usuário inserido com sucesso');
//             resposta({ message: 'Usuário inserido com sucesso' });
//         }).catch(erro => {
//             console.log('Erro ao inserir o usuário!');
//             resposta({ message: 'Erro ao inserir o usuário!' });
//         });

// })

// fetch('/api/buscar_usuario', {
//     method: 'POST',
//     body: JSON.stringify({
//         nome: 'sim',
//         nickname: 'sim'
//     }),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }).then(function (result){
//     return result.json();
// }).then(function (dados){ 
//     console.log(dados);
// }).catch(function (erro){
//     console.log(erro)
// });

// inserirRota('fazerlogin', function(dados, resposta) {

//     database('SELECT')

// })