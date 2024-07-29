import { Cliente } from 'src/clientes/cliente.model';

export class Gerente {
  private nome: string;
  private id: number;
  private clientes: Cliente[];

  constructor(nome: string, id: number) {
    this.nome = nome;
    this.id = id;
  }

  get getNome(): string {
    return this.nome;
  }

  get getId(): number {
    return this.id;
  }

  get getClientes(): Cliente[] {
    return this.clientes;
  }

  adicionarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }
}
