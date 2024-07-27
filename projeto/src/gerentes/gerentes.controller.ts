import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GerentesService } from './gerentes.service';
import { Gerente } from './gerente.model';

@Controller('gerentes')
export class GerentesController {
  constructor(private gerentesService: GerentesService) {}

  @Post('create')
  public criarCliente(@Body('nome') nome: string): Gerente {
    return this.gerentesService.create(nome);
  }

  @Get(':id')
  public findById(@Param('id') id: number): Gerente {
    return this.gerentesService.findById(id);
  }

  @Delete(':id')
  public removerCliente(@Param('id') id: number): void {
    this.gerentesService.remove(id);
  }
}
