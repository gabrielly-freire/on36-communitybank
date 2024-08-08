import { Pessoa } from './Pessoa';

export class Cliente extends Pessoa {
  constructor(
    public id: number,
    public nome: string,
    public endereco: string,
    public telefone: string,
    public idConta: number,
    public idGerente: number,
  ) {
    super(id, nome, endereco, telefone);
    this.idConta = idConta;
    this.idGerente = idGerente;
  }
}
