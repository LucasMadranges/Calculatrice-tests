export function calculation(val1: number, val2: number, type: string) {
    switch (type) {
        case 'sum':
            return val1 + val2;
        case 'sub':
            return val1 - val2;
        case 'div':
            return val1 / val2;
        case 'mul':
            return val1 * val2;
    }
}