database(`CREATE TABLE IF NOT EXISTS TESTE (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    NUMERO int
    )`).then(result => {
    console.log('Tabela TESTE criada com sucesso');
}).catch(erro => {
    console.log('Erro na criação da tabela TESTE');
});

database(`CREATE TABLE IF NOT EXISTS PESSOA ( 
    CPF CHAR(11) PRIMARY KEY,
    NOME VARCHAR(45) NOT NULL,
    IDADE INT
    )`).then(result => {
    console.log('Tabela PESSOA criada com sucesso');
}).catch(erro => {
    console.log('Erro na criação da tabela USER');
});

database(`CREATE TABLE IF NOT EXISTS PESSOA ( 
    CPF CHAR(11) PRIMARY KEY,
    NOME VARCHAR(45) NOT NULL,
    IDADE INT
    )`).then(result => {
    console.log('Tabela PESSOA criada com sucesso');
}).catch(erro => {
    console.log('Erro na criação da tabela PESSOA');
});

database(`CREATE TABLE IF NOT EXISTS CLIENTE (
    CODIGO INT PRIMARY KEY,
    USER VARCHAR(45),
    EMAIL VARCHAR(100),
    SENHA VARCHAR(45),
    PESSOA_CPF CHAR(11),
    FOREIGN KEY (PESSOA_CPF) REFERENCES PESSOA(CPF) ON UPDATE CASCADE ON DELETE CASCADE
)`).then(result => {
    console.log('Tabela CLIENTE criada com sucesso');
}).catch(erro => {
    console.log('Erro na criação da tabela CLIENTE');
});

// database(`INSERT INTO PESSOA VALUES ('12345678910', 'Bruna Mafra', 17), ('11400200520', 'Camilly Pessotti', '16'), 
// ('98765432108', 'João Henrique' , 17),('36925814709', 'Diego Planinscheck', 17)
// )`).then(result => {
//     console.log('DADOS NA TABELA PESSOA INSERIDOS');
// }).catch(erro => {
//     console.log('ERRO AO COLOCAR OS DADOS NA TABELA PESSOA');
// });