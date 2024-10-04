/*Em JavaScript, um objeto é um tipo de dado que permite armazenar
coleções de valores na forma de pares chave-valor. Objetos são
definidos usando {} (chaves) e podem ter:
Propriedades (atributos) que armazenam valores.
Métodos que são funções associadas a essas propriedades e
realizam operações.*/

// Criando um objeto "caminhao"
let caminhao = {
    marca: "Volksagen", // Propriedade: chave é 'marca', valor é "volkswagen"
    modelo: "Constellation", // Propriedade: chave é 'modelo', valor é "constellation"
    ano: 2024, // Propriedade: chave é 'ano', valor é 2024
    cor: "prata", // Propriedade: chave é 'cor', valor é "prata"

    // Método: define uma função associada ao objeto
    ligar: function() {
        console.log("O caminhão está ligado.")
    } 
};

// Acessando propriedades do objeto
console.log(caminhao.marca); // Saída: volkswagen
console.log(caminhao["ano"]); // Saída: 2024

// Chamando o método do objeto
caminhao.ligar(); // Saída: O caminhao está ligado.
