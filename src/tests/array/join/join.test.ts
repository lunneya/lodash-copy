import _join from "../../../array/join";
import { testData } from "./testData";

describe("join", () => {
    testData.forEach((item) => {
        it(`join ${JSON.stringify(item.input)} with separator "${item.separator}"`, () => {
            const { input, separator, result } = item;
            const array = _join(input, separator);
            expect(array).toEqual(result);
        })
    })
})