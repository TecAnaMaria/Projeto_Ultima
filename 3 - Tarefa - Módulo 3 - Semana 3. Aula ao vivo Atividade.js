class Objeto{
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }
    
    get area () {
        return this.calculaArea()
    }

    calculaArea() {
        return this.altura * this.largura;
    }

}

const quadrado = new Objeto(10, 10);
const retangulo = new Objeto (15, 10);

console.log(quadrado.area);
console.log(retangulo.area);