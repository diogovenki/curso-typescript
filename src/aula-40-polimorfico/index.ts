export class Calculadora {
    constructor(public numero: number) {}

    add(n: number): this {
        this.numero += n;
        return this;
    }

    sub(n: number): this {
        this.numero -= n;
        return this;
    }

    mul(n: number): this {
        this.numero *= n;
        return this;
    }

    div(n: number): this {
        this.numero /= n;
        return this;
    }
}

export class CalculadoraEspecifica extends Calculadora {
    pow(n: number): this {
        this.numero **= n;
        return this;
    }
}

const calculadora = new CalculadoraEspecifica(40);
calculadora.add(5).mul(2);
console.log(calculadora);

// builder
export class RequestBuilder {
    private method: 'get' | 'post' | null = null;
    private url: string | null = null;

    setUrl(url: string): this {
        this.url = url;
        return this;
    }

    setMethod(value: 'get' | 'post'): this {
        this.method = value;
        return this;
    }

    send(): void {
        console.log(`Enviando dados via ${this.method} para ${this.url}`);
    }
}

const request = new RequestBuilder();
request.setUrl('www.google.com').setMethod('get').send();
