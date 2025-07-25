import _drop from "../../../array/drop/drop";
import {testData} from "./testData";

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