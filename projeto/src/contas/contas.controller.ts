import { Controller } from '@nestjs/common';
import { ContasService } from './contas.service';

@Controller('contas')
export class ContasController {
  constructor(public contasService: ContasService) {}
  
}
