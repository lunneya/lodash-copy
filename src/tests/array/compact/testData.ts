export const testData = [
    {
        input: [1, 2, false, true, 3, 4, '', 5, null, "sdsds"],
        result: [1, 2, true, 3, 4, 5, "sdsds"],
    },
    {
        input: [1, 2, 3, 4, 5, null, undefined],
        result: [1, 2, 3, 4, 5]
    },
    {
        input: ['hello', 'halo', 'hi', NaN],
        result: ['hello', 'halo', 'hi']
    }
]