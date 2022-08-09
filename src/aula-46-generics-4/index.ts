type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const objetChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
    cor: 'rosa',
    vacinas: ['vacina1', 'vacina2', 'vacina3'],
};

console.log(objetChave(animal, 'vacinas'));
