export class Empresa {
    private readonly nome: string;
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionaColaborador(Colaborador: Colaborador) {
        this.colaboradores.push(Colaborador);
    }

    logColaboradores() {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }

    getNome(): string {
        return this.nome;
    }
}

export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ) {}
}

const empresa = new Empresa('empresa', 'cnpj');
const colaborador = new Colaborador('colaborador', 'sobrenome');

empresa.adicionaColaborador(colaborador);

console.log(empresa.getNome() /* empresa.nome */);
empresa.logColaboradores();
