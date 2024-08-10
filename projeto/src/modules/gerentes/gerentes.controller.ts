import { Body, Controller, Delete, Get, Param, Post, Put, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { GerentesService } from './gerentes.service';
import { Gerente } from '../../models/Gerente';

@Controller('gerentes')
export class GerentesController {
  constructor(private gerentesService: GerentesService) {}

  @Post('create')
  public criarGerente(
    @Body('nome') nome: string,
    @Body('endereco') endereco: string,
    @Body('telefone') telefone: string,
  ): Gerente {
    return this.gerentesService.create(nome, endereco, telefone);
  }

  @Get(':id')
  public findById(@Param('id', ParseIntPipe) id: number): Gerente {
    const gerente = this.gerentesService.findById(id);
    if (!gerente) {
      throw new NotFoundException(`Gerente com ID ${id} não encontrado`);
    }
    return gerente;
  }

  @Get()
  public findAll(): Gerente[] {
    return this.gerentesService.findAll();
  }

  @Put(':id')
  public atualizarGerente(
    @Param('id', ParseIntPipe) id: number,
    @Body('nome') nome: string,
    @Body('endereco') endereco: string,
    @Body('telefone') telefone: string,
  ): Gerente {
    const gerenteAtualizado = this.gerentesService.update(id, nome, endereco, telefone);
    if (!gerenteAtualizado) {
      throw new NotFoundException(`Gerente com ID ${id} não encontrado`);
    }
    return gerenteAtualizado;
  }

  @Delete(':id')
  public removerGerente(@Param('id', ParseIntPipe) id: number): void {
    const gerente = this.gerentesService.findById(id);
    if (!gerente) {
      throw new NotFoundException(`Gerente com ID ${id} não encontrado`);
    }
    this.gerentesService.remove(id);
  }
}
