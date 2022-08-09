function decorator(target: any, key: string | symbol): any {
    console.log(target, key);
    let value: any;

    return {
        get() {
            return value + '_2';
        },
        set(_value: any) {
            value = _value;
        },
    };
}

export class Pessoa {
    @decorator
    nome: string;
    sobrenome: string;
    idade: number;

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    metodo(msg: string): string {
        return `${this.nome} ${this.sobrenome}: ${msg}`;
    }

    get nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa('nome', 'sobrenome', 20);
console.log(pessoa.nome);
