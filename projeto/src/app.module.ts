import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { ContasModule } from './contas/contas.module';
import { GerentesModule } from './gerentes/gerentes.module';

@Module({
  imports: [ClientesModule, ContasModule, GerentesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
