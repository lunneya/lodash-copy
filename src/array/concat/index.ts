function _concat(array: any[], ...values: any[]): any[] {
    return array.concat(...values);
}

function __concat(array: any[], ...values: any[]): any[] {
    let result: any[] = [];

    // copy array
    for (let i = 0; array.length > i; i++) {
        result.push(array[i]);
    }

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

export default { _concat, __concat };