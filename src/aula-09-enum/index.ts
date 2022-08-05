// boa pratica usar em uppercase
enum Cores {
    VERMELHO,
    AZUL,
    AMARELO,
}

// enum pode fazer merge
enum Cores {
    BRANCO = 200,
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[1]);
