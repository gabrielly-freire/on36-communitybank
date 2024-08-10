import { ClienteRepository } from '../../repositories/cliente.repository';
import { Cliente } from 'src/models/Cliente';
import * as fs from 'fs';

describe('ClienteRepository', () => {
  let clienteRepository: ClienteRepository;

  beforeEach(() => {
    clienteRepository = new ClienteRepository();
  });

  describe('teste writeClientes', () => {
    it('deve escreve clientes no arquivo', () => {
      const mockClientes: Cliente[] = [
        {
          id: 1,
          nome: 'João',
          endereco: 'Rua A, 123',
          telefone: '1234-5678',
          idConta: 1001,
          idGerente: 2001,
        },
        {
          id: 2,
          nome: 'Maria',
          endereco: 'Rua B, 456',
          telefone: '9876-5432',
          idConta: 1002,
          idGerente: 2002,
        },
      ];

      clienteRepository.writeClientes(mockClientes);
      const writtenData = fs.readFileSync("src/data/clientes.json", 'utf8');
      const parsedData = JSON.parse(writtenData);

      expect(parsedData).toEqual(mockClientes);
    });
  });

  describe('teste readCliente', () => {
    it('deve ler os clientes do arquivo', () => {
      const mockClientes: Cliente[] = [
        {
          id: 1,
          nome: 'João',
          endereco: 'Rua A, 123',
          telefone: '1234-5678',
          idConta: 1001,
          idGerente: 2001,
        },
        {
          id: 2,
          nome: 'Maria',
          endereco: 'Rua B, 456',
          telefone: '9876-5432',
          idConta: 1002,
          idGerente: 2002,
        },
      ];

      const clientes = clienteRepository.readClientes();

      expect(clientes).toEqual(mockClientes);
    });
  });

});
