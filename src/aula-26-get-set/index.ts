export class Pessoa {
    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private _cpf: string,
    ) {}

    getNome(): string {
        return this.nome;
    }

    getSobrenome(): string {
        return this.sobrenome;
    }

    getIdade(): number {
        return this.idade;
    }

    set cpf(cpf: string) {
        this._cpf = cpf;
    }

    get cpf(): string {
        return this._cpf.replace(/\D/g, '');
    }

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa('nome', 'sobrenome', 20, '123.456.789-00');
pessoa.cpf = '987.456.789-00';
console.log(pessoa.cpf);
