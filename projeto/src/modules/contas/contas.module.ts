import { Module } from '@nestjs/common';
import { ContasController } from './contas.controller';
import { ContasService } from '../contas/contas.service';
import { ContaRepository } from 'src/repositories/contas.repository';

@Module({
  controllers: [ContasController],
  providers: [ContasService, ContaRepository],
})
export class ContasModule {}
