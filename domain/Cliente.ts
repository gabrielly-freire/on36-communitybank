import {Conta} from "./Conta";

export class Cliente{
    private id: string;
    private nome: string;
    private endereco: string;
    private telefone: string;
    private contas: Conta[];

    constructor(id: string, nome: string, endereco: string, telefone: string){
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.contas = [];
    }

    get getId(){
        return this.id;
    }

    get getNome(){
        return this.nome;
    }

    get getEndereco(){
        return this.endereco;
    }

    get getTelefone(){
        return this.telefone;
    }

    get getContas(){
        return this.contas;
    }

    criarConta(conta: Conta) {
        this.contas.push(conta);
    }

}