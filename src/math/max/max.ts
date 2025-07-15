function _max(array: number[]): number | undefined {
    if (array.length === 0) return undefined;

    let result = array[0];

    for (let i = 1; i < array.length; i++) {
        if (result < array[i]) result = array[i];
    }
    return result;
}

export default _max;