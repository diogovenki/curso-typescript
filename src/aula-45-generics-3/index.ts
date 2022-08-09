interface PessoaProtocolo<T = string, U = number> {
    nome: T;
    sobrenome: T;
    idade: U;
}

const aluno: PessoaProtocolo = {
    nome: 'Nome',
    sobrenome: 'Sobrenome',
    idade: 10,
};

const aluno2: PessoaProtocolo<number> = {
    nome: 2,
    sobrenome: 4,
    idade: 10,
};
