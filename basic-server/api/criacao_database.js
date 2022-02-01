database(`CREATE TABLE IF NOT EXISTS TESTE (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    NUMERO int
    )`).then(result => {
    console.log('Tabela TESTE criada com sucesso');
}).catch(erro => {
    console.log('Erro na criação da tabela TESTE');
});

database(`CREATE TABLE IF NOT EXISTS USER (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    NICKNAME varchar(30)
    )`).then(result => {
    console.log('Tabela USER criada com sucesso');
}).catch(erro => {
    console.log('Erro na criação da tabela USER');
});