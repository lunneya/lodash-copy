function _reverse(array: any[]): any[] {
    const result = [];
    for (let i = array.length - 1; i >= 0; i--) {
        const item = array[i];
        result.push(item);
    }
    return result;
}

export default _reverse;