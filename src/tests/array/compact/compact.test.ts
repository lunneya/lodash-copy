import _compact from "../../../array/compact";
import { testData } from "./testData";

describe("compact", () => {
    testData.forEach((item) => {
        it(`compact ${item.input.toString()}`, () => {
            const { input, result } = item;
            const array = _compact(input);
            expect(array).toEqual(result);
        })
    })
})