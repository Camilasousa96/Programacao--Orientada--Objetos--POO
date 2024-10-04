/*Crie e manipule um objeto simples, como um Car com propriedades
e métodos básicos.
Crie um objeto car com as propriedades make (fabricante), model
(modelo), year (ano), color (cor) e mileage (quilometragem).
Adicione um método chamado drive que aumenta a quilometragem
do carro.
Adicione um método displayInfo para exibir as informações do carro.
Adicione um método paintCar que altera a cor do carro.
Utilize os métodos e manipule as propriedades para testar o objeto
car.*/

// Definindo o objeto 'Carro'
let Carro = {
    marca: 'Chevrolet',
    modelo: 'Cruze',
    ano: 2023,
    cor: 'Prata',
    quilometragem: 0,

// Método para dirigir o carro e aumentar a quilometragem
dirigir: function(distancia) {
    this.quilometragem += distancia;
},

// Método para exibir as informações do carro 
    exibirInformacoes: function() {
        console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}, Quilometragem: ${this.quilometragem} km`)
    },

 // Método para alterar a cor do carro   
    pintarCarro: function(novaCor){
        this.cor = novaCor;
    }
};

// Testando o objeto 'Carro'
Carro.dirigir(50); // Aumenta a quilometragem em 50km
Carro.exibirInformacoes(); // Exibe: 

Carro.pintarCarro('Vermelho'); // Muda a cor do carro para vermelho
Carro.exibirInformacoes(); // Exibe:
