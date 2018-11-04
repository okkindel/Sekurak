export function doXOR(a: String, b: String): string {
    let result: string = '';

    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] === ' ') {
            result += ' ';
        } else if (a[i] == b[i]) {
            result += '0';
        } else {
            result += '1';
        }
    }
    return result;
}

export const swap = (text: String) => text.split('')
    .map((c) =>
        c === c.toUpperCase()
            ? c.toLowerCase()
            : c.toUpperCase()
    ).join('')