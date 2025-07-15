function _nth(array: any[], number: number = 0): any {
    let element: any = 0;
    let index: number = 0;

    if (number >= 0) {
        index = number;
    } else {
        index = array.length + number;
    }

    element = array[index];

    return element;
}

export default _nth;