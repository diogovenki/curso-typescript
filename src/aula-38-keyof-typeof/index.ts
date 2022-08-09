// type CoresObjeto = {
//     vermelho: string;
//     verde: string;
//     azul: string;
// };
type CoresObjeto = typeof coresObjeto;
type CoresChave = keyof CoresObjeto;

const coresObjeto /* : CoresObjeto */ = {
    vermelho: 'red',
    verde: 'green',
    azul: 'blue',
};

function traduzirCor(cor: CoresChave, cores: typeof coresObjeto) {
    return cores[cor];
}

console.log(traduzirCor('vermelho', coresObjeto));
