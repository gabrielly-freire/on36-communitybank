import * as path from 'path';
import * as fs from 'fs';
import { Gerente } from 'src/models/Gerente';

export class GerenteRepository {
  private readonly filePath = path.resolve('src/data/gerentes.json');

  public readGerentes(): Gerente[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Gerente[];
  }

  public writeGerentes(gerentes: Gerente[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(gerentes, null, 2), 'utf8');
  }
}
