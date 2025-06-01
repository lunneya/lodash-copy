export const testData = [
    {input: [1, 2, 3, "sd", 4, "ds"],
    result: ["ds", 4, "sd", 3, 2, 1]},
    {input: [1, 2, 3, "sd", 4, "ds", null, 8],
    result: [8, null, "ds", 4, "sd", 3, 2, 1]},
    {input: [1],
    result: [1]},
    {input: [null],
    result: [null]},
]