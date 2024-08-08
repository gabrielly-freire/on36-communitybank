import { GerenteRepository } from '../../repositories/gerente.repository'
import { Injectable } from '@nestjs/common';
import { Gerente } from '../../models/Gerente';

@Injectable()
export class GerentesService {
  constructor(private gerenteRepository: GerenteRepository) {}

  public create(nome: string, endereco: string, telefone: string): Gerente {
    const gerentes = this.gerenteRepository.readGerentes();
    const novoGerente = new Gerente(
      gerentes.length > 0 ? gerentes[gerentes.length - 1].id + 1 : 1,
      nome,
      endereco,
      telefone,
    );

    gerentes.push(novoGerente);
    this.gerenteRepository.writeGerentes(gerentes);
    return novoGerente;
  }

  public findById(id: number): Gerente {
    const gerentes = this.gerenteRepository.readGerentes();
    const gerente = gerentes.find((gerente) => gerente.id === id);

    if (!gerente) throw new Error('Gerente não encontrado');

    return gerente;
  }

  public findAll(): Gerente[] {
    return this.gerenteRepository.readGerentes();
  }

  public update(id: number, nome: string, endereco: string, telefone: string): Gerente {
    const gerentes = this.gerenteRepository.readGerentes();
    const gerenteIndex = gerentes.findIndex((gerente) => gerente.id === id);

    if (gerenteIndex === -1) throw new Error('Gerente não encontrado');

    const updatedGerente = new Gerente(id, nome, endereco, telefone);
    gerentes[gerenteIndex] = updatedGerente;

    this.gerenteRepository.writeGerentes(gerentes);
    return updatedGerente;
  }

  public remove(id: number): void {
    const gerentes = this.gerenteRepository.readGerentes();
    const clienteIndice = gerentes.findIndex((gerente) => gerente.id === id);
    gerentes.splice(clienteIndice, 1);
    this.gerenteRepository.writeGerentes(gerentes);
  }
}
