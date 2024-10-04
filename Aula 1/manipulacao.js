/*Podemos adicionar, modificar ou excluir propriedades de um objeto
a qualquer momento.*/

let pessoa = {
    nome: "Ana",
    idade: 30
};

// Adicionar nova propriedade
pessoa.cidade = "Rio de Janeiro";
console.log(pessoa.cidade); // Saída: Rio de Janeiro

// Modificar propriedade existente
pessoa.idade = 31;
console.log(pessoa.idade); // Saída: 31

// Excluir propriedade
delete pessoa.cidade;
console.log(pessoa.cidade); // Saída: undefined