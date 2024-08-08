import { Injectable } from '@nestjs/common';
import { Cliente } from '../../models/Cliente';
import { ClienteRepository } from 'src/repositories/cliente.repository';

@Injectable()
export class ClientesService {
  constructor(private clienteRepository: ClienteRepository) {}

  public create(
    nome: string,
    endereco: string,
    telefone: string,
    idConta: number,
    idGerente: number,
  ): Cliente {
    const clientes = this.clienteRepository.readClientes();
    const novoCliente = new Cliente(
      clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1,
      nome,
      endereco,
      telefone,
      idConta,
      idGerente,
    );
    clientes.push(novoCliente);
    this.clienteRepository.writeClientes(clientes);
    return novoCliente;
  }

  public findById(id: number): Cliente {
    const clientes = this.clienteRepository.readClientes();
    const cliente = clientes.find((cliente) => cliente.id === id);

    if (!cliente) throw new Error('Cliente não encontrado');

    return cliente;
  }

  public findAll(): Cliente[] {
    return this.clienteRepository.readClientes();
  }

  public update(
    id: number,
    nome: string,
    endereco: string,
    telefone: string,
    idConta: number,
    idGerente: number,
  ): Cliente {
    const clientes = this.clienteRepository.readClientes();
    const clienteIndex = clientes.findIndex((cliente) => cliente.id === id);

    if (clienteIndex === -1) throw new Error('Cliente não encontrado');

    clientes[clienteIndex] = new Cliente(
      id,
      nome,
      endereco,
      telefone,
      idConta,
      idGerente,
    );

    this.clienteRepository.writeClientes(clientes);
    return clientes[clienteIndex];
  }

  public remove(id: number): void {
    const clientes = this.clienteRepository.readClientes();
    const clienteIndice = clientes.findIndex((cliente) => cliente.id === id);
    clientes.splice(clienteIndice, 1);
    this.clienteRepository.writeClientes(clientes);
  }
}
