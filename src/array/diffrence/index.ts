function _difference(array: any[], values: any[]): any[] {
    const filteredValues: any[] = [];
    for (let i = 0; i < array.length; i++) {
        if (!values.includes(array[i])) filteredValues.push(array[i]);
    }

    return filteredValues;
}

export default _difference;