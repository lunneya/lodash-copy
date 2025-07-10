function _slice(array: any[], start: number, end: number): Array<any> {
    let result: Array<any> = [];
    array.forEach((item: any, index: any) => {
        if (index + 1 >= start && index + 1 <= end) {
            result.push(item);
        }
    })
    return result;
}

export default _slice;