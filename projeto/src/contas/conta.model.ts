export abstract class Conta {
  constructor(
    public id: number,
    public idCliente: number,
    public saldo: number,
  ) {}
}
