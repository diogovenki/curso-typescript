// look to Record

const objA: {
    readonly property1: string;
    property2: number;
    [key: string]: unknown;
} = {
    property1: 'value1',
    property2: 2,
};

// objA.property1 = 'value1';
objA.property2 = 5;
objA.teste = 'teste';
