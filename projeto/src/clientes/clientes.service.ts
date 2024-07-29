import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { Cliente } from './cliente.model';

@Injectable()
export class ClientesService {
  private readonly filePath = path.resolve('src/clientes/clientes.json');

  private readClientes(): Cliente[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Cliente[];
  }

  private writeClientes(clientes: Cliente[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(clientes, null, 2), 'utf8');
  }

  public create(nome: string, endereco: string, telefone: string, idConta: number, idGerente: number): Cliente {
    const clientes = this.readClientes();
    const novoCliente = new Cliente(
      clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1,
      nome,
      endereco,
      telefone,
      idConta,
      idGerente,
    );
    clientes.push(novoCliente);
    this.writeClientes(clientes);
    return novoCliente;
  }

  public findById(id: number): Cliente {
    const clientes = this.readClientes();
    const cliente = clientes.find((cliente) => cliente.id === id);

    return cliente;
  }

  public remove(id: number): void {
    const clientes = this.readClientes();
    const clienteIndice = clientes.findIndex((cliente) => cliente.id === id);
    clientes.splice(clienteIndice, 1);
    this.writeClientes(clientes);
  }
}
