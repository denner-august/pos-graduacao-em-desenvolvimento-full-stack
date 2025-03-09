export class Conta {
  constructor(saldo, agencia) {
    this._saldo = saldo
    this._agencia = agencia

    if (this.constructor == Conta) {
      throw new Error('Essa e uma classe abstrata voce nao pode instacia-la')
    }
  }

  set saldo(valor) {
    this._saldo = valor
  }

  get saldo() {
    return this._saldo
  }

  sacar(valorParaSaque) {
    if (this._saldo < valorParaSaque) {
      console.log('Voce nao pode sacar mais do que voce tem')
    } else {
      this._saldo -= valorParaSaque
      console.log(`Dinheiro sacado com sucesso, Seu saldo eh de ${this._saldo}`)
      return valorParaSaque
    }
  }
  depositar(valorParaDeposito) {
    if (valorParaDeposito <= 0) {
      console.log('Digite um valor acima de 0 para deposito')
    } else {
      this._saldo += valorParaDeposito
      console.log(
        `Dinheiro depositado com sucesso, Seu saldo eh de ${this._saldo}`
      )
      return valorParaDeposito
    }
  }
  transferir(valorParaTransferencia, conta) {
    if (valorParaTransferencia <= 0) {
      console.log(
        `Voce nao pode transferir o que nao tem, seu saldo eh de ${this._saldo}`
      )
    } else {
      const valorSacado = this._sacar(valorParaTransferencia)
      console.log(valorSacado)
      conta.depositar(valorSacado)
      console.log(
        `Valor de ${valorParaTransferencia} foi transferido para ${this._cliente.nome}`
      )
    }
  }
}
