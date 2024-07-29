export class Cliente {
  constructor(
    public id: number,
    public nome: string,
    public endereco: string,
    public telefone: string,
    public idConta: number,
    public idGerente: number,
  ) {}
}
