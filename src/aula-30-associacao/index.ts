export class Escritor {
    private _ferramenta: Ferramenta | null = null;

    constructor(private _nome: string) {}

    public get nome(): string {
        return this._nome;
    }

    public set ferramenta(ferramenta: Ferramenta | null) {
        this._ferramenta = ferramenta;
    }

    public get ferramenta(): Ferramenta | null {
        return this._ferramenta;
    }

    escrever(): void {
        if (this.ferramenta === null) {
            console.log('Não posso escrever sem ferramenta');
            return;
        }

        this.ferramenta.escrever();
    }
}

export abstract class Ferramenta {
    constructor(private _nome: string) {}

    public get nome(): string {
        return this._nome;
    }

    abstract escrever(): void;
}

export class Caneta extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está escrevendo`);
    }
}

export class MaquinaDigitadora extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está digitalizando`);
    }
}

const escritor = new Escritor('Escritor');
const caneta = new Caneta('Caneta');
const maquinaDigitadora = new MaquinaDigitadora('Maquina');

escritor.escrever();

escritor.ferramenta = caneta;
escritor.escrever();

escritor.ferramenta = maquinaDigitadora;
escritor.escrever();

escritor.ferramenta = null;
escritor.escrever();
