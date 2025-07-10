// 1
// let names = ["anna", "boris", "victor",];
// names.push("gosha")
// names.shift()
// names.unshift("dasha")
// console.log(names)
//
// 2
// let sum = 0;
// let ages = [20, 25, 30, 35, 40,];
// for (let i = 0; i < ages.length; i++) {
//     sum += ages[i];
// }
//
// console.log(sum / ages.length);

// 3 forEach and map
// let users = [
//     { name: "anna", age: 22 },
//     { name: "boris", age: 30 },
//     { name: "clara", age: 19 },
// ];
//
// users.forEach((user, index) => {
//     console.log(`Пользователь ${user.name} имеет возраст ${user.age} лет`);
// })
//
// let arrayNames = users.map(names => `${names.name} (${names.age})`);
// console.log(arrayNames);
//
// 4
// let nums = [2, 5, 8, 10];
//
// let result = nums.map(num => num ** 2);
// console.log(result);
//
//
// result.forEach((item, index) => {
//     console.log(`Число ${nums[index]} возведенное в квадрат равно ${item}`)
// });

// 5 fib

// let fib = [0, 1, 1, 2, 3, 5, 8];
// function sumArr(numbers) {
//
//     let sum = 0;
//     numbers.forEach((num) => sum += num);
//
//     return sum;
// }
//
// console.log(sumArr(fib));


// let randomArray = [1, 2, 3, "sd", 4, "ds", "rt", 5];
//
//
// function _last(array) {
//     return array[array.length - 1];
// }

// console.log(_last(randomArray));
// function _compact(array) {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]) {
//             result.push(array[i]);
//         }
//     }
//     return result;
// }
//
// console.log(_compact(
//     [1, 2, false, true, 3, 4, '', 5, null, "sdsds"]
// ));

// const _compactFilter = array => array.filter(Boolean);
//
//
//
// function _compact(array) {
//     return array.filter(item => !!item);
// }
//
// console.log(_compact(
//     [1, 2, false, true, 3, 4, '', 5, null, "sdsds"]
// ));
//
// function _join(array, separator) {
//     return array.join(separator);
// }
//
// console.log(_join(["a", "b", "c", "d"], '~'));


// drop dropRight
// function _drop(array, number = 1) {
//     return array.slice(number);
// }
//
// console.log(_drop(["a", "b", 3, 4], 2));
//
// function _dropRight(array, number = 1) {
//     return array.slice(0, array.length - number);
// }
//
// console.log(_dropRight(["a", "b", 3, 4], 2));


// function _pull(array, ...values) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         console.log(array[i]);
//         if (values.includes(array[i])) {
//             array.splice(i, 1);
//     }
// }
//     return array
// }

// function _pull(array, ...values) {
//     return array.filter(item => !values.includes(item));
// }
//
//
// console.log(_pull(array, 'a', 'c'));

const array = ['a', 'b', 'c', 'd'];
let start = 2;
let end = 3;

function _slice(array, start, end) {
    let result = [];
    array.forEach((item, index) => {
        // Надо проверить, чтобы индекс был >= start, если да то, push в result и проверить >= end
        console.log(`element: ${item}, index: ${index+1}, start: ${start}, end: ${end}`);
        if (index + 1 >= start && index + 1 <= end) {
            result.push(item);
        }
    })
    return result;
}
console.log(_slice(array, start, end));