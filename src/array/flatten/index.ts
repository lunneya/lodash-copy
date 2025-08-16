function _flatten(array: any[]) {
    let result: any[] = [];

    if (!Array.isArray(array)) return result;

    for (let i = 0; i < array.length; i++) {

        if (Array.isArray(array[i])) {
            for (let j = 0; j < array[i].length; j++) {
                result.push(array[i][j]);
            }
        } else {
            result.push(array[i]);
        }

    }

    return result;
}

export default _flatten;