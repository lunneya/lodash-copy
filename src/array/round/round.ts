function _round(number: number, precision: number = 0): number {
    // Если precision равен 0
    if (precision === 0) return Math.round(number);


    return number;
}

console.log(_round(4.006))