type TipoPessoa = {
    nome: string;
    sobrenome: string;
    nomeCompleto(): string;
};

export class Pessoa implements TipoPessoa {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
        throw this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa('Nome', 'Sobrenome');
console.log(pessoa.nomeCompleto());
