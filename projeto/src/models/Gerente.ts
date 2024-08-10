import { Pessoa } from './Pessoa';

export class Gerente extends Pessoa {
  public clientes: number[];

  constructor(
    public id: number,
    public nome: string,
    public endereco: string,
    public telefone: string,
  ) {
    super(id, nome, endereco, telefone);
  }
}
