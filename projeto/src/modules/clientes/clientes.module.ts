import { Module } from '@nestjs/common';
import { ClientesController } from '../clientes/clientes.controller';
import { ClientesService } from './clientes.service';
import { ClienteRepository } from 'src/repositories/cliente.repository';

@Module({
  controllers: [ClientesController],
  providers: [ClientesService, ClienteRepository],
})
export class ClientesModule {}
