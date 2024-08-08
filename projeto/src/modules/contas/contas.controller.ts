import { Controller, Post, Get, Param, Put, Delete, Body, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { ContasService } from './contas.service';
import { Conta } from '../../models/Conta';
import { TipoConta } from './enum/TipoConta';

@Controller('contas')
export class ContasController {
  constructor(private readonly contasService: ContasService) {}

  @Post('create')
  public criarConta(
    @Body('tipo') tipo: TipoConta,
    @Body('saldo') saldo: number,
    @Body('idCliente') idCliente: number,
  ): Conta {
    return this.contasService.create(tipo, saldo, idCliente);
  }

  @Get(':id')
  public findById(@Param('id', ParseIntPipe) id: number): Conta {
    const conta = this.contasService.findById(id);
    if (!conta) {
      throw new NotFoundException(`Conta com ID ${id} não encontrada`);
    }
    return conta;
  }

  @Get()
  public findAll(): Conta[] {
    return this.contasService.findAll();
  }

  @Put(':id')
  public atualizarConta(
    @Param('id', ParseIntPipe) id: number,
    @Body('tipo') tipo: TipoConta,
    @Body('saldo') saldo: number,
    @Body('idCliente') idCliente: number,
  ): Conta {
    return this.contasService.update(id, tipo, saldo, idCliente);
  }

  @Delete(':id')
  public removerConta(@Param('id', ParseIntPipe) id: number): void {
    const conta = this.contasService.findById(id);
    if (!conta) {
      throw new NotFoundException(`Conta com ID ${id} não encontrada`);
    }
    this.contasService.remove(id);
  }
}
