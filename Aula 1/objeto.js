/*Objeto Literal:
Definido diretamente usando {} (como mostrado no exemplo).
É a forma mais simples e direta.
Construtor de Objetos:
Usando new Object().

Função Construtora: Funções construtoras devem iniciar com letra
maiúscula para seguir a convenção de nomenclatura.
Definindo uma função para criar instâncias de objetos.*/

function CarroUngido(marca, modelo, ano, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.ligar = function() {
        console.log("O carro está ligado.");
    };
}

// Criando uma nova instância de Carro
let meuCarro = new CarroUngido("Volkswagen", "Gola", 2016, "preto");

console.log(meuCarro.marca); // Saída: Volkswagen
meuCarro.ligar();