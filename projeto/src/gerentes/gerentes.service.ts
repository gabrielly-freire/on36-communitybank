import { Injectable } from '@nestjs/common';
import { Gerente } from './gerente.model';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class GerentesService {
  private readonly filePath = path.resolve('src/gerentes/gerentes.json');

  private readGerentes(): Gerente[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Gerente[];
  }

  private writeGerentes(gerentes: Gerente[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(gerentes, null, 2), 'utf8');
  }

  public create(nome: string): Gerente {
    const gerentes = this.readGerentes();
    const novoGerente = {
      id: gerentes.length > 0 ? gerentes[gerentes.length - 1].id + 1 : 1,
      nome,
    };

    gerentes.push(novoGerente);
    this.writeGerentes(gerentes);
    return novoGerente;
  }

  public findById(id: number): Gerente {
    const gerentes = this.readGerentes();
    const gerente = gerentes.find((gerente) => gerente.id === id);

    return gerente;
  }

  public remove(id: number): void {
    const gerentes = this.readGerentes();
    const clienteIndice = gerentes.findIndex((gerente) => gerente.id === id);
    gerentes.splice(clienteIndice, 1);
    this.writeGerentes(gerentes);
  }
}
