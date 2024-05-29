const empregado = {
  salarioBase: 1000,
  valorHoraExtra: 50,
  qtHorasEntras: 2,
  calculaSalario: function () {
    return this.salarioBase + (this.valorHoraExtra + this.qtHorasEntras);
  },
};

// console.log(empregado.calculaSalario());

class empregado1 {
  salarioBase = 1000;
  valorHoraExtra = 50;
  qtHorasEntras = 2;
  calculaSalario = function () {
    return this.salarioBase + (this.valorHoraExtra + this.qtHorasEntras);
  };
}

// let chefe = new empregado1();
// console.log(chefe.calculaSalario());

class empregado2 {
  calculaSalario = function (salarioBase, valorHoraExtra, qtHorasEntras) {
    return salarioBase + (valorHoraExtra + qtHorasEntras);
  };
}

const chefe = new empregado2();
// console.log(chefe.calculaSalario(1000, 50, 2));
