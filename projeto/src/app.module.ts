import { Module } from '@nestjs/common';
import { ClientesModule } from './modules/clientes/clientes.module';
import { ContasModule } from './modules/contas/contas.module';
import { GerentesModule } from './modules/gerentes/gerentes.module';

@Module({
  imports: [ClientesModule, ContasModule, GerentesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
