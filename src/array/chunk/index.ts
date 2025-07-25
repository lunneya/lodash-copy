export default function _chunk(array: any[], size: number = 1) {
    let result: any[] = [];
    let currentIndex: number = 0;

    while (currentIndex <= array.length) {
        const endIndex = currentIndex + size;
        const tempArray = array.slice(currentIndex, endIndex);
        currentIndex += size;
        result.push(tempArray);
    }

    return result;
}

console.log(_chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3));

export function _chunkIterable(array: any[], size: number = 1): any[] {
    let result: any[] = [];

    let currentIndex: number = 0;
    let tempArr: any[] = [];

    for (let i = 0; i < array.length; i++) {
        console.log({currentIndex}, i);
        if (currentIndex < size) {
            tempArr.push(array[i]);
            currentIndex++;

        } else {
            currentIndex = 1;
            result.push(tempArr);
            tempArr = [array[i]];
        }
    }

    if (tempArr.length) result.push(tempArr);

    return result;
}

















