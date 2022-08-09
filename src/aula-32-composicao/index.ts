export class Carro {
    private readonly motor = new Motor();

    ligar(): void {
        this.motor.ligar();
    }

    desligar(): void {
        this.motor.desligar();
    }

    acelerar(): void {
        this.motor.acelerar();
    }

    parar(): void {
        this.motor.parar();
    }
}

export class Motor {
    ligar(): void {
        console.log('Ligando o motor');
    }

    desligar(): void {
        console.log('Desligando o motor');
    }

    acelerar(): void {
        console.log('Acelerando o motor');
    }

    parar(): void {
        console.log('Parando o motor');
    }
}

const carro = new Carro();
carro.ligar();
carro.desligar();
carro.acelerar();
carro.parar();
