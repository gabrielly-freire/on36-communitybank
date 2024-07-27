import { ClientesService } from './clientes.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Cliente } from './cliente.model';

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
    return this.clientesService.create(
      nome,
      endereco,
      telefone,
      idConta,
      idGerente,
    );
  }

  @Get(':id')
  public findById(@Param('id') id: number): Cliente {
    return this.clientesService.findById(id);
  }

  @Delete(':id')
  public removerCliente(@Param('id') id: number): void {
    this.clientesService.remove(id);
  }
}
