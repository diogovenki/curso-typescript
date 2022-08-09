interface Pessoa {
    nome: string;
}

interface Pessoa {
    readonly sobrenome: string;
}

interface Pessoa {
    readonly enderecos: readonly string[];
}

interface Pessoa {
    idade?: number;
}

export const pessoa: Pessoa = {
    nome: 'Nome',
    sobrenome: 'Sobrenome',
    enderecos: ['endereco 1', 'endereco 2', 'endereco 3'],
};
