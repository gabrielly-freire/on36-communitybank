import * as path from 'path';
import * as fs from 'fs';
import { Cliente } from 'src/models/Cliente';

export class ClienteRepository {
  private readonly filePath = path.resolve('src/data/clientes.json');

  public readClientes(): Cliente[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Cliente[];
  }

  public writeClientes(clientes: Cliente[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(clientes, null, 2), 'utf8');
  }
}
