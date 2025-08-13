function _flatten(array: any[]) {
    let result: any[] = [];

    if (!Array.isArray(array)) return result;

    for (let i = 0; i < array.length; i++) {

        if (array[i] !== null) { // проверка и на null, и на undefined

            if (Array.isArray(array[i])) {
                for (let j = 0; j < array[i].length; j++) {
                    result.push(array[i][j]);
                }
            } else {
                result.push(array[i]);
            }

        }
    }

    return result;
}

console.log(_flatten([1, [2, 3], [4, [5]], null]));

export default _flatten;