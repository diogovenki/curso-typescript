/* eslint-disable @typescript-eslint/no-inferrable-types */

// tipos basicos
const nome: string = 'Diogo';
const number: number = 0b1010; // 10, 0xf....
const adult: boolean = false; // true or false
const symbol: symbol = Symbol('data');

// arrays
const arrayString: string[] = ['foo', 'bar', 'baz'];
const arrayNumber: number[] = [1, 2, 3];

// objetos
const pessoa: { nome: string; idade: number; adult?: boolean } = {
    nome: nome,
    idade: 2,
};

// function
function soma(x: number, y: number): number {
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
