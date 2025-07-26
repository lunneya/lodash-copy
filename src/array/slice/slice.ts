function _slice(array: any[], start?: number, end?: number): Array<any> {
    let result: Array<any> = [];

    // Если не переданы start && end
    if (start === undefined && end === undefined) return array;


    array.forEach((item: any, index: number) => {
        // Если переданы start && end
        if (start !== undefined && end !== undefined) {
            if (index >= start && index < end) {
                result.push(item);
            }
        }

        // Если передан только start
        if (start !== undefined && end === undefined) {
            if (index >= start) {
                result.push(item);
            }
        }
    })
    return result;
}

console.log(_slice([1,2,3,4,5,6,7,8], 2))
export default _slice;