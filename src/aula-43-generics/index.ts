type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function filter<T>(array: T[], callback: FilterCallback<T>): T[] {
    const novo = [];
    for (const i of array) {
        if (callback(i)) novo.push(i);
    }
    return novo;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a'];
const arrayFiltradoOriginal = array.filter((value) => value < 5);
const arrayFiltrado = filter(array, (value) => value < 5);

console.log(arrayFiltradoOriginal, arrayFiltrado);
