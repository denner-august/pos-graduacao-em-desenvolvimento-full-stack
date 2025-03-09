import { Conta } from './Conta.js'

export class ContaCorrente extends Conta {
  constructor(saldo, agencia, cliente) {
    super(saldo, agencia, cliente)
  }
}
