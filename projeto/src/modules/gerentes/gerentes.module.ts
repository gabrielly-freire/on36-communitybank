import { Module } from '@nestjs/common';
import { GerentesController } from './gerentes.controller';
import { GerentesService } from './gerentes.service';
import { GerenteRepository } from 'src/repositories/gerente.repository';

@Module({
  controllers: [GerentesController],
  providers: [GerentesService, GerenteRepository],
})
export class GerentesModule {}
