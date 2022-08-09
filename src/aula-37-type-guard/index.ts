type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export function add(a: unknown, b: unknown): unknown {
    if (a === 'number' && typeof b === 'number') return a + b;
    return `${a}${b}`;
}

export class Aluno implements Pessoa {
    tipo: 'pessoa' = 'pessoa';
    constructor(public nome: string) {}
}

function mostraNome(objeto: PessoaOuAnimal) {
    // if ('nome' in objeto) console.log(objeto.nome);
    // if (objeto instanceof Aluno) console.log(nome);
    switch (objeto.tipo) {
        case 'pessoa':
            console.log(objeto.nome);
            break;
        case 'animal':
            console.log('Isto é um animal: ' + objeto.cor);
            break;
    }
}
