import { Cliente } from "./Cliente";
import { Conta } from "./Conta";

export class ContaPoupanca extends Conta{
    
    private taxa: number;

    constructor(id: string, cliente: Cliente, saldo: number){
        super(id, cliente, saldo);
        this.taxa = 0.05;
    }

    adicionarJuros(){
        this.saldo += this.saldo * this.taxa;
    }

    transferer(destino: Conta, valor: number){
        this.validarSaldo(valor);
        this.saldo -= valor;
        destino.setSaldo = valor + destino.getSaldo;
    }

    sacar(valor: number){
        this.validarSaldo(valor);
        this.saldo -= valor;
    }

    depositar(valor: number){
        this.saldo += valor;
    }

    validarSaldo(valor: number){
        if(valor > this.saldo){
            throw new Error(`Saldo insuficiente para realizar a transferência mesmo com limite especial. Seu saldo atual é de R$ ${this.saldo}.`)
        }
    }

}