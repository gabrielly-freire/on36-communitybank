import {Cliente} from "./Cliente";

export abstract class Conta{
    protected id: string;
    protected cliente: Cliente;
    protected saldo: number;

    constructor(id: string, cliente: Cliente, saldo: number){
        this.id = id;
        this.cliente = cliente;
        this.saldo = saldo;
    }

    get getId(){
        return this.id;
    }

    get getCliente(){
        return this.cliente;
    }

    get getSaldo(){
        return this.saldo;
    }

    set setSaldo(saldo: number){
        this.saldo = saldo;
    }

    abstract transferer(destino: Conta, valor: number): void;

    abstract sacar(valor: number): void;

    abstract depositar(valor: number): void;

}