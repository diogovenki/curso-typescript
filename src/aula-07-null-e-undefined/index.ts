let x;
if (typeof x === 'undefined') x = 20;

console.log(x * 2);

function createPerson(
    firstName: string,
    lastName?: string,
): {
    firstName: string;
    lastName?: string;
} {
    return {
        firstName,
        lastName,
    };
}

function squareOf(x: any): number | null {
    if (typeof x === 'number') return x * x;

    return null;
}

const squareOf2 = squareOf(2);

if (squareOf2 !== null) {
    console.log(squareOf2 * 2);
}
