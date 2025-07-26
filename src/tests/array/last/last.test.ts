import _last from "../../../array/last";
import { testData } from "./testData";

describe("last", () => {
    testData.forEach((item) => {
        it(`last ${item.input.toString()}`, () => {
            const { input, result } = item;
            const array = _last(input);
            expect(array).toEqual(result);
        })
    })
})