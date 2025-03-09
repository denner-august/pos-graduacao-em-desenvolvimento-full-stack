import { Conta } from './Conta.js'

export class Empresarial extends Conta {
  constructor(saldo, agencia, cliente) {
    super(saldo, agencia, cliente)
  }
  imprimirConta() {
    console.log('conta empresarial')
  }

  imprimirSaldo() {
    console.log(this._saldo * 3)
  }
}
