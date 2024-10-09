/*Crie uma classe Retangulo com os atributos largura e altura. Adicione um 
método calcularArea que retorne a área do retângulo.*/

class Retangulo {
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea(){
        let resultado = this.largura*this.altura
        return `A area do Retângulo é: ${resultado}`;
    }
}
let areaRetangulo = new Retangulo(5, 2.5);
console.log(areaRetangulo.calcularArea())

/* OU
class Retangulo {
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea(){
        return this.largura * this.altura;
    }
}
let retangulo1 = new Retangulo(5, 2.5);
console.log(retangulo1.calcularArea());*/