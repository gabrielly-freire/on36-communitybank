import { Cliente } from './Cliente';
import { Conta } from './Conta';

export class ContaCorrente extends Conta {
  private limite: number;

  constructor(id: string, cliente: Cliente, saldo: number) {
    super(id, cliente, saldo);
    this.limite = 500;
  }

  transferer(destino: Conta, valor: number) {
    this.validarSaldo(valor);
    this.saldo -= valor;
    destino.setSaldo += valor;
  }

  sacar(valor: number) {
    this.validarSaldo(valor);
    this.saldo -= valor;
  }

  depositar(valor: number) {
    this.saldo += valor;
  }

  validarSaldo(valor: number) {
    if (valor > this.saldo + this.limite) {
      throw new Error(
        `Saldo insuficiente para realizar a transferência mesmo com limite especial. Seu saldo atual é de R$ ${this.saldo}.`,
      );
    }
  }
}
