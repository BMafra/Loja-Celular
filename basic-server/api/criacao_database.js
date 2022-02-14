database(`CREATE TABLE IF NOT EXISTS PESSOA ( 
    CPF CHAR(11) NOT NULL PRIMARY KEY,
    NOME VARCHAR(45) NOT NULL,
    IDADE INT
    )`).then(result => {
    console.log('Tabela PESSOA criada com sucesso');
}).catch(erro => {
    console.log('Erro na criação da tabela PESSOA');
});

database(`CREATE TABLE IF NOT EXISTS CLIENTE (
    CODIGO INT AUTO_INCREMENT PRIMARY KEY,
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

database(`CREATE TABLE IF NOT EXISTS MARCA (
    CODIGO INT AUTO_INCREMENT PRIMARY KEY,
    NOME VARCHAR(45) NOT NULL
)`).then(result => {
    console.log('Tabela MARCA criada com sucesso');
}).catch(erro => {
    console.log('Erro na criação da tabela MARCA');
});

database(`CREATE TABLE IF NOT EXISTS PRODUTO (
    CODIGO INT AUTO_INCREMENT PRIMARY KEY,
    NOME VARCHAR(45) NOT NULL,
    PRECO DOUBLE NOT NULL,
    MARCA_CODIGO INT NOT NULL,
    FOREIGN KEY (MARCA_CODIGO) REFERENCES MARCA(CODIGO) ON UPDATE CASCADE ON DELETE CASCADE
)`).then(result => {
    console.log('Tabela PRODUTO criada com sucesso');
}).catch(erro => {
    console.log('Erro na criação da tabela PRODUTO');
});

database(`CREATE TABLE IF NOT EXISTS ENDERECO (
    CODIGO INT AUTO_INCREMENT PRIMARY KEY,
    PAIS VARCHAR(45) NOT NULL,
    ESTADO VARCHAR(45) NOT NULL,
    CIDADE VARCHAR(45) NOT NULL,
    BAIRRO VARCHAR(45) NOT NULL,
    NUMERO INT NOT NULL
)`).then(result => {
    console.log('Tabela ENDERECO criada com sucesso');
}).catch(erro => {
    console.log('Erro na criação da tabela ENDERECO');
});

// database(`INSERT INTO PESSOA VALUES ('12345678910', 'Bruna Mafra', 17), ('11400200520', 'Camilly Pessotti', '16'), 
// ('98765432108', 'João Henrique' , 17),('36925814709', 'Diego Planinscheck', 17)
// )`).then(result => {
//     console.log('DADOS NA TABELA PESSOA INSERIDOS');
// }).catch(erro => {
//     console.log('ERRO AO COLOCAR OS DADOS NA TABELA PESSOA');
// });