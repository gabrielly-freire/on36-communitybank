import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { Conta } from './conta.model';

@Injectable()
export class ContasService {
  private readonly filePath = path.resolve('src/contas/contas.json');

  private readContas(): Conta[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Conta[];
  }

  private writeContas(contas: Conta[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(contas, null, 2), 'utf8');
  }
}
