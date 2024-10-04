// Criando um objeto "car" com propriedades e métodos
let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    cor:'azul',

    mostrarInformacao: function(){
        console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`);
    },

    //Método para alterar a cor do carro
    pintarCarro: function(novaCor){
        this.cor = novaCor;
    }
};

//Acessando propriedades
console.log(carro.marca);

//Chamando métodos
carro.mostrarInformacao();
