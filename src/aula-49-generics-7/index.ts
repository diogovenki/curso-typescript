export function eNumero(value: unknown): value is number {
    return typeof value === 'number';
}

console.log(eNumero(1));
console.log(eNumero('1'));

export function soma<T>(...args: T[]): number {
    const retorno = args.reduce((sum, value) => {
        if (eNumero(value) && eNumero(sum)) return sum + value;
        return sum;
    }, 0);

    return retorno;
}

console.log(soma(1, 2, 3));
console.log(soma('a', 'b', 'c'));
console.log(soma(...[1, 2, 3, 'a', 'b', 'c']));
