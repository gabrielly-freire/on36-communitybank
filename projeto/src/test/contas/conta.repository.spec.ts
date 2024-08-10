import { ContaRepository } from '../../repositories/contas.repository';
import { Conta } from 'src/models/Conta';
import * as fs from 'fs';

describe('ContaRepository', () => {
  let contaRepository: ContaRepository;

  beforeEach(() => {
    contaRepository = new ContaRepository();
  });

  describe('teste writeContas', () => {
    it('deve escreve contas no arquivo', () => {
      const mockContas: Conta[] = [
        {
          id: 1,
          idCliente: 5000,
          saldo: 1,
        },
        {
          id: 2,
          idCliente: 5000,
          saldo: 1,
        },
      ];

      contaRepository.writeContas(mockContas);
      const writtenData = fs.readFileSync('src/data/contas.json', 'utf8');
      const parsedData = JSON.parse(writtenData);

      expect(parsedData).toEqual(mockContas);
    });
  });

  describe('teste readConta', () => {
    it('deve ler os contas do arquivo', () => {
      const mockContas: Conta[] = [
        {
          id: 1,
          idCliente: 5000,
          saldo: 1,
        },
        {
          id: 2,
          idCliente: 5000,
          saldo: 1,
        },
      ];

      const contas = contaRepository.readContas();

      expect(contas).toEqual(mockContas);
    });
  });
});
