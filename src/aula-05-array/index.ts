// Array<T> - T[]
function multiplicarArgs(...args: number[]): number {
    return args.reduce((acc, value) => acc * value, 0);
}

function concatenarString(...args: string[]): string {
    return args.reduce((acc, value) => acc + value, '');
}

const result = multiplicarArgs(1, 2, 3);
const concat = concatenarString('a', 'b', 'c');

console.log(result);
console.log(concat);
