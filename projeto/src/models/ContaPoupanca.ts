import { Conta } from './Conta';

export class ContaPoupanca extends Conta {
  private taxa: number;

  constructor(id: number, idCliente: number, saldo: number) {
    super(id, idCliente, saldo);
    this.taxa = 0.05;
  }
}
