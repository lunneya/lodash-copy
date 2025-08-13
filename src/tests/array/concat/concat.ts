import _concat from '../../../array/concat/index';
import { testData } from './testData';

describe('Some function', () => {
    testData.forEach((item) => {
        it('test', () => {
            const { input, values, result } = item;
            // const array = _concat(input, values);
        })
    })
})