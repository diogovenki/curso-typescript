export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string,
    ) {}

    getIdade(): number {
        return this.idade;
    }

    getCpf(): string {
        return this.cpf;
    }

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

export class Aluno extends Pessoa {
    getNomeCompleto(): string {
        console.log('usando o super de Pessoa');
        return 'Aluno: ' + super.getNomeCompleto();
    }
}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return 'Cliente: ' + this.nome + ' ' + this.sobrenome;
    }
}

const aluno = new Aluno('nome', 'sobrenome', 18, 'cpf');
const cliente = new Cliente('nome', 'sobrenome', 19, 'cpf');
const pessoa = new Pessoa('nome', 'sobrenome', 20, 'cpf');

console.log(aluno.getNomeCompleto());
console.log(cliente.getIdade());
console.log(pessoa.getNomeCompleto());
