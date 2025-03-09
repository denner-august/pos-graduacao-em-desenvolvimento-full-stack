import { Conta } from './Conta.js'

export class ContaPoupanca extends Conta {
  constructor(saldo, agencia) {
    super(saldo, agencia)
  }

  depositar(valorParaDeposito) {
    if (valorParaDeposito <= 500) {
      console.log('Digite um valor acima de 500 para abrir uma Conta Poupaca')
    } else {
      this.saldo += valorParaDeposito
      console.log(
        `Dinheiro depositado na conta poupanca com sucesso! ${this.saldo}`
      )
    }
  }
}
