type CallbackString = (item: string) => string;

function mapStrings(array: string[], callbackFn: CallbackString): string[] {
    const newArray: string[] = [];

    for (let i = 0; i < array.length; i++) newArray.push(callbackFn(array[i]));

    return newArray;
}

const abc = ['a', 'b', 'c'];
const mapped = mapStrings(abc, function (item) {
    return item.toUpperCase();
});

console.log(mapped);
