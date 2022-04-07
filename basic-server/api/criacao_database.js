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
    URL VARCHAR(100) NOT NULL,
    NOME VARCHAR(45) NOT NULL,
    PRECO DOUBLE NOT NULL,
    CARRINHO BOOLEAN NOT NULL,
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

// database(`INSERT INTO PRODUTO VALUES 
// (1, 'https://images-americanas.b2w.io/produtos/01/00/img/3923260/3/3923260353_1GG.jpg', 'iPhone 13 Pro Max', 9450.10, false, 2), 
// (2, 'https://images-americanas.b2w.io/produtos/01/00/img/2449596/0/2449596051_1GG.jpg', 'iPhone SE', 2700.00, false, 2),
// (3, 'https://images-americanas.b2w.io/produtos/01/00/img/1674059/9/1674059957_1GG.jpg', 'K41s', 850.15, false, 1), 
// (4, 'https://images-americanas.b2w.io/produtos/01/00/img/1674892/8/1674892869_1GG.jpg', 'K61', 1250.30, false, 1),
// (5, 'https://images-americanas.b2w.io/produtos/01/00/img/2626417/8/2626417861_1GG.jpg', 'E7', 899.90, false, 3), 
// (6, 'https://images-americanas.b2w.io/produtos/01/00/img/4160810/2/4160810256_1GG.jpg', 'G20', 1200.45, false, 3), 
// (7, 'https://images-americanas.b2w.io/produtos/01/00/img/2875240/4/2875240402_1GG.jpg', 'S21', 3599.10, false, 4), 
// (8, 'https://images-americanas.b2w.io/produtos/01/00/img/4579620/3/4579620304_1GG.jpg', 'Note 20', 5118.90, false, 4),
// (9, 'https://images-americanas.b2w.io/produtos/4796209132/imagens/celular-xiaomi-mi-11-lite-dual-sim-128gb-black-6gb-ram-gamer/4796209132_1_large.jpg', 'MI 11', 3100, false, 5), 
// (10,'https://images-americanas.b2w.io/produtos/4522803417/imagens/xiaomi-redmi-note-8-dual-sim-64gb-moonlight-white-4gb-ram/4522803417_1_large.jpg', 'Redmi Note 8', 1500.90, false, 5)
// `).then(result => {
//     console.log('DADOS NA TABELA PRODUTO INSERIDOS');
// }).catch(erro => {
//     console.log('ERRO AO COLOCAR OS DADOS NA TABELA PRODUTO');
// });

// database(`INSERT INTO ENDERECO VALUES (null, 'Brasil', 'SC', 'Jaraguá do Sul', 'Jaragua 99', 50), 
// (null, 'Brasil', 'SC', 'Jaraguá do Sul', 'Rio da Luz', 110), (null, 'Brasil', 'SC', 'Jaraguá do Sul', 'Tifa Martins', 847),
// (null, 'Brasil', 'SC', 'Jaraguá do Sul', 'São Luiz', 404)
// `).then(result => {
//     console.log('DADOS NA TABELA ENDERECO INSERIDOS');
// }).catch(erro => {
//     console.log('ERRO AO COLOCAR OS DADOS NA TABELA ENDERECO');
// });

// database(`INSERT INTO PESSOA VALUES ('12345678910', 'Bruna Mafra', 17), ('11400200520', 'Camilly Pessotti', '16'), 
// ('98765432108', 'João Henrique' , 17),('36925814709', 'Diego Planinscheck', 17)
// `).then(result => {
//     console.log('DADOS NA TABELA PESSOA INSERIDOS');
// }).catch(erro => {
//     console.log('ERRO AO COLOCAR OS DADOS NA TABELA PESSOA');
// });

// database(`INSERT INTO MARCA VALUES (1, 'LG'), (2, 'Apple'), (3, 'Motorola'), 
// (4, 'Samsung'), (5, 'Xiaomi')
// `).then(result => {
//     console.log('DADOS NA TABELA MARCA INSERIDOS');
// }).catch(erro => {
//     console.log('ERRO AO COLOCAR OS DADOS NA TABELA MARCA');
// });

// database(`INSERT INTO CLIENTE VALUES (null, 'bamafra', 'bruna@gmail.com', 'bamafra', 1), 
// (null, 'camilly', 'camilly@gmail.com', 'camilly', 2), (null, 'jao', 'joao@gmail.com', 'jao', 3), 
// (null, 'diego', 'diego@gmail.com', 'diego', 4)
// `).then(result => {
//     console.log('DADOS NA TABELA CLIENTE INSERIDOS');
// }).catch(erro => {
//     console.log('ERRO AO COLOCAR OS DADOS NA TABELA CLIENTE');
// });