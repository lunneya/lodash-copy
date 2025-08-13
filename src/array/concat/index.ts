function _concat(array: any[], ...values: any[]): any[] {
    return array.concat(...values);
}

function __concat(array: any[], ...values: any[]): any[] {
    let result: any[] = [...array];

    for (let i = 0; i < values.length; i++) {
        const item = values[i];

        if (Array.isArray(item)) {
            for (let j = 0; j < item.length; j++) result.push(item[j]);
        } else {
            result.push(item);
        }
    }
    return result;
}

console.log(_concat([1], 2, [3], [[4]]))

export default { _concat, __concat };