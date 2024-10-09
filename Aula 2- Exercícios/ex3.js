/*Crie uma classe Veiculo com os atributos marca e modelo. Crie uma 
classe Moto que herde de Veiculo e adicione um atributo cilindradas. 
Adicione um método exibirDetalhes que exiba as informações da moto.*/

class Veiculo {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
    info(){
        return `Veiculo: ${marca}, ${modelo}`;
    }
    class Moto extends Veiculo{
        constructor(marca, modelo, cilindradas){
            super(marca, modelo);
            this.cilindradas = cilindradas;
        }
        info(){
            return`${super.info()} | Cilindradas: ${this.cilindradas}`
        }
    }
    exibirDetalhes(){
        return`Moto: ${}`
         
    }
}
