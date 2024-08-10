import { Injectable, NotFoundException } from '@nestjs/common';
import { ContaRepository } from 'src/repositories/contas.repository';
import { ContaFactory } from '../contas/factory/Conta.factory';
import { TipoConta } from '../contas/enum/TipoConta';
import { Conta } from '../../models/Conta';

@Injectable()
export class ContasService {
  constructor(private contaRepository: ContaRepository) {}

  public create(tipo: TipoConta, cliente: number, saldo: number): Conta {
    const contas = this.contaRepository.readContas();
    const id = contas.length > 0 ? contas[contas.length - 1].id + 1 : 1;
    const novaConta = ContaFactory.criarConta(tipo, id, cliente, saldo);
    contas.push(novaConta);
    this.contaRepository.writeContas(contas);
    return novaConta;
  }

  public findById(id: number): Conta {
    const contas = this.contaRepository.readContas();
    const conta = contas.find((conta) => conta.id === id);

    if (!conta) throw new Error('Conta não encontrada');

    return conta;
  }

  public findAll(): Conta[] {
    return this.contaRepository.readContas();
  }

  public update(id: number, tipo: TipoConta, cliente: number, saldo: number): Conta {
    const contas = this.contaRepository.readContas();
    const contaIndex = contas.findIndex((conta) => conta.id === id);

    if (contaIndex === -1) throw new Error('Conta não encontrada');

    const contaAtualizada = ContaFactory.criarConta(tipo, id, cliente, saldo);
    contas[contaIndex] = contaAtualizada;

    this.contaRepository.writeContas(contas);
    return contaAtualizada;
  }

  public remove(id: number): void {
    const contas = this.contaRepository.readContas();
    const contaIndex = contas.findIndex((conta) => conta.id === id);

    if (contaIndex === -1) {
      throw new Error('Conta não encontrada');
    }

    contas.splice(contaIndex, 1);
    this.contaRepository.writeContas(contas);
  }
}
