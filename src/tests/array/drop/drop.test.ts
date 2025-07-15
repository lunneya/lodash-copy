import _drop from "../../../array/drop/drop";

const testData = [
    {
        title: 'happy path',
        number: 2,
        input: ['a', 'b', 'c', 'd', 'e'],
        result: ['c', 'd', 'e']
    },
    {
        title: 'without number',
        input: ['a', 'b', 'c'],
        result: ['b', 'c']
    }
]


describe("drop", () => {
    testData.forEach((item) => {
        const { title, number, input, result: expectedResult } = item;

        // const expectedResult = item.result;
        it(`drop ${title}`, () => {
            const result = _drop(input, number);
            expect(result).toEqual(expectedResult);
        })
    })
})