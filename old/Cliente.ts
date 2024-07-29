import { Conta } from './Conta';
import { Gerente } from './Gerente';

export class Cliente {
  private id: string;
  private nome: string;
  private endereco: string;
  private telefone: string;
  private contas: Conta[];
  private gerente: Gerente;

  constructor(id: string, nome: string, endereco: string, telefone: string, gerente:Gerente) {
    this.id = id;
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone;
    this.contas = [];
    this.gerente = gerente;
  }

  get getId() {
    return this.id;
  }

  get getNome() {
    return this.nome;
  }

  get getEndereco() {
    return this.endereco;
  }

  get getTelefone() {
    return this.telefone;
  }

  get getContas() {
    return this.contas;
  }

  criarConta(conta: Conta) {
    this.contas.push(conta);
  }
}
