function _differenceBy(array: any[], values: any[], iteratee: any): any[] {
    const filteredValues: any[] = [];

    const valuesIteratee = values.map(num => {
        if (typeof iteratee === 'function') {
            return iteratee(num);
        } else {
            return num[iteratee];
        }
    });

    const arrayIteratee = array.map(num => {
        if (typeof iteratee === 'function') {
            return iteratee(num);
        } else {
            return num[iteratee];
        }
    });

    for (let i = 0; i < arrayIteratee.length; i++) {
        if (!valuesIteratee.includes(arrayIteratee[i])) {
            filteredValues.push(array[i]);
        }
    }

    return filteredValues;
}

export default _differenceBy;