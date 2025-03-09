import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'

const ContaC1 = new ContaCorrente(1000, '001')
const ContaP1 = new ContaPoupanca(0, '001')

const ContaC2 = new ContaCorrente(1000, '001')
const ContaP2 = new ContaPoupanca(0, '001')

const Cliente1 = new Cliente(ContaC1, ContaP1, 'yeda', '57036740')
const Cliente2 = new Cliente(ContaC2, ContaP2, 'victor', '08367852400')

ContaP2.depositar(1000)

console.log(Cliente1)
console.log(Cliente2)
