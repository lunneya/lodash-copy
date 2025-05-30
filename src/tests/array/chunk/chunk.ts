import chunk from '../../../array/chunk'

describe('Some function', () => {
    it('test', () => {
        const result = chunk([1, 2, 3, 4, 5], 2)
        expect(result).toStrictEqual([[1, 2], [3, 4], [5]])
    })
})
