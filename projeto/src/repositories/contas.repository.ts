import * as path from 'path';
import * as fs from 'fs';
import { Conta } from 'src/models/Conta';

export class ContaRepository {
  private readonly filePath = path.resolve('src/data/contas.json');

  public readContas(): Conta[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Conta[];
  }

  public writeContas(contas: Conta[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(contas, null, 2), 'utf8');
  }
}
