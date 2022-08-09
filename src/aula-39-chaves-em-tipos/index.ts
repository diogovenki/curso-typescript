export type Veiculo = {
    marca: string;
    ano: string;
};

export type Car = {
    brand: Veiculo['marca'];
    year: Veiculo['ano'];
    name: string;
};

const carro: Car = {
    brand: 'Mawa',
    year: '2020',
    name: 'nome',
};

console.log(carro);
