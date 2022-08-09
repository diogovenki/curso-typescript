function decorator(
    target: any,
    key: string,
    descriptor: PropertyDescriptor,
): PropertyDescriptor {
    console.log(target, key, descriptor);

    return {
        writable: false,
    };
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

    @decorator
    metodo(msg: string): string {
        return `${this.nome} ${this.sobrenome}: ${msg}`;
    }

    get nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa('nome', 'sobrenome', 20);
// pessoa.metodo = () => 'abc'; // error Cannot assign to read only property 'metodo' of object '#<Pessoa>'
console.log(pessoa.metodo('mensagem'));
