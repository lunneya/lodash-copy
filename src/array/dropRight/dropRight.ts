function dropRight(array: any[], number: number = 1): any[] {
    let minusNumber = -number;
    console.log(array, number, minusNumber);
    return array.slice(minusNumber);
}

console.log(dropRight([1,2,3,4,5,6], 3));