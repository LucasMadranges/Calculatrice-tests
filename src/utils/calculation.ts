export function calculation(val1: number, val2: number, type: string) {
    if (isNaN(val1) || isNaN(val2)) return "Error NaN";
    switch (type) {
        case "sum":
            return val1 + val2;
        case "sub":
            return val1 - val2;
        case "div":
            if (val2 === 0) return "Error";
            return val1 / val2;
        case "mul":
            return val1 * val2;
    }
}