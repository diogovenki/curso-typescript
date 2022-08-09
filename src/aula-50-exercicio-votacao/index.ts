type VotationOption = {
    option: string;
    amount: number;
};

export class Votation {
    private options: Map<VotationOption['option'], VotationOption> = new Map();
    constructor(public label: string) {}

    addOptions(...options: VotationOption['option'][]): void {
        for (const option of options) {
            if (this.options.has(option)) return;

            this.options.set(option, { option, amount: 0 });
        }
    }

    showStatistics(): void {
        for (const { option, amount } of this.options.values()) {
            console.log(amount, 'votos em', option);
        }
    }

    vote(option: VotationOption['option']): void {
        const votationOption = this.options.get(option);
        if (votationOption === undefined) return;

        votationOption.amount++;
    }
}

export class VotationApp {
    private votations: Set<Votation> = new Set();

    addVotations(...votations: Votation[]): void {
        for (const votation of votations) {
            this.votations.add(votation);
        }
    }

    showVotations(): void {
        for (const votation of this.votations) {
            console.log(votation.label);
            votation.showStatistics();
            console.log(''); // newline
        }
    }
}

const language = new Votation('Qual a melhor linguagem?');
language.addOptions('javascript', 'python', 'java', 'javascript');
language.vote('javascript');
language.vote('javascript');
language.vote('javascript');
language.vote('java');
language.vote('nao existe');

const color = new Votation('Qual a cor que você mais gosta?');
color.addOptions('vermelho', 'azul', 'verde', 'azul');

color.vote('vermelho');
color.vote('vermelho');
color.vote('azul');
color.vote('azul');
color.vote('verde');
color.vote('nao existe');

const app = new VotationApp();
app.addVotations(language, language, color);
app.showVotations();
