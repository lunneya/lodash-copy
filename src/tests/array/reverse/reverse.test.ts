import _reverse from "../../../array/reverse";
import { testData } from "./testData";

describe("reverse", () => {
    testData.forEach((item) => {
        it(`reverse ${item.input.toString()}`, () => {
            const { input, result } = item;
            // const input = item.input;
            // const result = item.result;
            const array = _reverse(input);
            expect(array).toEqual(result);
        })
    })
})