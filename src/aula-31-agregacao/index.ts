export class Carrinho {
    private readonly produtos: Produto[] = [];

    adicionarProdutos(...produtos: Produto[]) {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }

    quantidadeProdutos(): number {
        return this.produtos.length;
    }

    valorTotal(): number {
        return this.produtos.reduce((sum, produto) => sum + produto.valor, 0);
    }
}

export class Produto {
    constructor(public nome: string, public valor: number) {}
}

const carrinho = new Carrinho();
carrinho.adicionarProdutos(
    new Produto('produto1', 100),
    new Produto('produto2', 30),
);

console.log(carrinho, `TOTAL: ${carrinho.valorTotal()}`);
