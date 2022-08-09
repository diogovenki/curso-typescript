function decorator(target: any, key: string, index: number): any {
    console.log(target, key, index);
}

export class Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    metodo(@decorator msg: string): string {
        return `${this.nome} ${this.sobrenome}: ${msg}`;
    }

    get nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa('nome', 'sobrenome', 20);
console.log(pessoa.metodo('mensagem'));
