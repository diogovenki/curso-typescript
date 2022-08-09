export abstract class Personagem {
    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number,
    ) {}

    atacar(personagem: Personagem): void {
        this.bordao();
        console.log(`LOG: ${this.nome} está atacando`);

        personagem.perderVida(this.ataque);
    }

    perderVida(forca: number): void {
        this.vida -= forca;
        console.log(`LOG: ${this.nome} agora tem ${this.vida} de vida`);
    }

    abstract bordao(): void;
}

export class Guerreira extends Personagem {
    bordao(): void {
        console.log(`Aooo ataqueeee`);
    }
}

export class Monstro extends Personagem {
    bordao(): void {
        console.log(`AAAaaa`);
    }
}

// const personagem = new Personagem('Personagem', 100, 1000);
const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 100, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);

monstro.atacar(guerreira);
