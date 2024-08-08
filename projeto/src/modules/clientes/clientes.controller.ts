import { ClientesService } from 'src/modules/clientes/clientes.service';
import { Body, Controller, Delete, Get, Param, Post, Put, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { Cliente } from '../../models/Cliente';

@Controller('clientes')
export class ClientesController {
  constructor(private clientesService: ClientesService) {}

  @Post('create')
  public criarCliente(
    @Body('nome') nome: string,
    @Body('endereco') endereco: string,
    @Body('telefone') telefone: string,
    @Body('idConta') idConta: number,
    @Body('idGerente') idGerente: number,
  ): Cliente {
    return this.clientesService.create(nome, endereco, telefone, idConta, idGerente);
  }

  @Get(':id')
  public findById(@Param('id', ParseIntPipe) id: number): Cliente {
    return this.clientesService.findById(id);
  }

  @Get()
  public findAll(): Cliente[] {
    return this.clientesService.findAll();
  }

  @Put(':id')
  public atualizarCliente(
    @Param('id', ParseIntPipe) id: number,
    @Body('nome') nome: string,
    @Body('endereco') endereco: string,
    @Body('telefone') telefone: string,
    @Body('idConta') idConta: number,
    @Body('idGerente') idGerente: number,
  ): Cliente {
    const clienteAtualizado = this.clientesService.update(id, nome, endereco, telefone, idConta, idGerente);
    return clienteAtualizado;
  }

  @Delete(':id')
  public removerCliente(@Param('id', ParseIntPipe) id: number): void {
    const cliente = this.clientesService.findById(id);
    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }
    this.clientesService.remove(id);
  }
}
