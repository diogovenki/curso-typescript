type Documento = {
    titulo: string;
    texto: string;
    data?: Date;
};

const documento: Documento = {
    titulo: 'titulo',
    texto: 'texto',
    data: new Date(Date.now()),
};

console.log(documento.data?.toDateString() ?? 'sem data');
