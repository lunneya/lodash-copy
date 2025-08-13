function _fill(
    array: any[],
    value: any,
    start: number =  0,
    end = array.length
) {

    // Если параметр array не является массивом, возвращаем []
    if (!Array.isArray(array)) return [];


    if (start < 0) {
        start = array.length + start;
        if (start < 0) {
            start = 0;
        }
    }

    if (end > array.length) {
        end = array.length;
    }

    for (let i = start; i < end; i++) {
        array[i] = value;
    }

    return array;
}

export default _fill;