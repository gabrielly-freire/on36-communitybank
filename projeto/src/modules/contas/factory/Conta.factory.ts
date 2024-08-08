import { ContaCorrente } from '../../../models/ContaCorrente';
import { ContaPoupanca } from '../../../models/ContaPoupanca';
import { TipoConta } from '../enum/TipoConta';

export class ContaFactory {
  static criarConta(tipo: TipoConta, id: number, cliente: number, saldo: number) {
    switch (tipo) {
      case TipoConta.CONTA_CORRENTE:
        return new ContaCorrente(id, cliente, saldo);
      case TipoConta.CONTA_POUPANCA:
        return new ContaPoupanca(id, cliente, saldo);
      default:
        throw new Error('Tipo de conta inválido');
    }
  }
}
