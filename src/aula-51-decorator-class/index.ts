@decorator
export class Animal {
    constructor(public nome: string, public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
        cor: string;

        constructor(...args: any[]) {
            super(...args);
            this.name = args[0].split('').reverse().join('');
            this.cor = args[1].split('').reverse().join('');
        }
    };
}

const AnimalDecorated = decorator(Animal);

// const animal = new AnimalDecorated('animal', 'vermelho');
const animal = new Animal('animal', 'vermelho');
console.log(animal);
