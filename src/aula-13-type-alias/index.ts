type Idade = number;
type Pessoa = {
    nome: string;
    idade: Idade;
    salario?: number;
    corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const person: Pessoa = {
    nome: 'Nome',
    idade: 18,
};

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
    return {
        ...pessoa,
        corPreferida: cor,
    };
}
