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
    CARRINHO DOUBLE NOT NULL,
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
// (1, 'https://www.fastshop.com.br/wcsstore/FastShopCAS/imagens/_AE_Apple/AEMLL63BZAGFT/AEMLL63BZAGFT_PRD_1500_1.jpg', 'iPhone 13 Pro Max', 9450.10, false, 2), 
// (2, 'https://a-static.mlcdn.com.br/618x463/iphone-se-apple-64gb-branco-47-ios/magazineluiza/155582500/a1d4194bbb9119e2819f67472413a585.jpg', 'iPhone SE', 2700.00, false, 2),
// (3, 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/e/celular-smartphone-k41s-6-5-32gb-lg_329814.jpg', 'K41s', 850.15, false, 1), 
// (4, 'https://images.kabum.com.br/produtos/fotos/113757/smartphone-lg-k61-128gb-48mp-tela-6-53-branco-lm-q630baw_1594301289_original.jpg', 'K61', 1250.30, false, 1),
// (5, 'https://images.kabum.com.br/produtos/fotos/154259/smartphone-motorola-moto-e7-64gb-ram-4gb-octa-core-camera-48mp-4000mah-cinza-metalico-palv0031br_1616608846_gg.jpg', 'E7', 899.90, false, 3), 
// (6, 'https://imgs.extra.com.br/55022929/1xg.jpg?imwidth=292', 'G20', 1200.45, false, 3), 
// (7, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xDuHA35p60bq5mF6yrmqaEPrBAmY3ANDjw&usqp=CAU', 'S21', 3599.10, false, 4), 
// (8, 'https://cdn11.bigcommerce.com/s-ss31ap/images/stencil/1280x1280/products/7612/36767/71mCOMFSAWL._AC_SL1500___22411.1605251366.1280.1280__64163__56651.1630558685.jpg?c=2', 'Note 20', 5118.90, false, 4),
// (9, 'https://http2.mlstatic.com/D_NQ_NP_888926-MLA46928568376_072021-O.jpg', 'MI 11', 3100, false, 5), 
// (10,'https://http2.mlstatic.com/D_NQ_NP_847649-MLA48798662447_012022-O.jpg', 'Redmi Note 8', 1500.90, false, 5)
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