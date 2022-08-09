export function unir<A, B>(objeto1: A, objeto2: B): A & B {
    return { ...objeto1, ...objeto2 };
}

const uniao = unir({ a: 'a' }, [0, 2]);
console.log(uniao);
