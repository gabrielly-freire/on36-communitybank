import { GerenteRepository } from '../../repositories/gerente.repository';
import { Gerente } from 'src/models/Gerente';
import * as fs from 'fs';

describe('GerenteRepository', () => {
  let gerenteRepository: GerenteRepository;

  beforeEach(() => {
    gerenteRepository = new GerenteRepository();
  });

  describe('teste writeGerentes', () => {
    it('deve escreve gerentes no arquivo', () => {
      const mockGerentes: Gerente[] = [
        {
          id: 1,
          nome: 'Carlos Silva',
          endereco: 'Av. Brasil, 1000',
          telefone: '1234-5678',
          clientes: [101, 102, 103],
        },
        {
          id: 2,
          nome: 'Ana Oliveira',
          endereco: 'Rua das Flores, 200',
          telefone: '9876-5432',
          clientes: [104, 105],
        },
      ];

      gerenteRepository.writeGerentes(mockGerentes);
      const writtenData = fs.readFileSync('src/data/gerentes.json', 'utf8');
      const parsedData = JSON.parse(writtenData);

      expect(parsedData).toEqual(mockGerentes);
    });
  });

  describe('teste readGerente', () => {
    it('deve ler os gerentes do arquivo', () => {
      const mockGerentes: Gerente[] = [
        {
          id: 1,
          nome: 'Carlos Silva',
          endereco: 'Av. Brasil, 1000',
          telefone: '1234-5678',
          clientes: [101, 102, 103],
        },
        {
          id: 2,
          nome: 'Ana Oliveira',
          endereco: 'Rua das Flores, 200',
          telefone: '9876-5432',
          clientes: [104, 105],
        },
      ];

      const gerentes = gerenteRepository.readGerentes();

      expect(gerentes).toEqual(mockGerentes);
    });
  });
});
