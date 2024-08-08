import { Conta } from './Conta';

export class ContaCorrente extends Conta {
  private limite: number;

  constructor(id: number, idCliente: number, saldo: number) {
    super(id, idCliente, saldo);
    this.limite = 500;
  }
}
