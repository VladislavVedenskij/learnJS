//  Реализуйте функцию getNumbersByParity, которая принимает массив чисел в качестве первого 
// аргумента и строку "even" или "odd" в качестве второго. Функция должна вернуть новый массив, 
// состоящий из четных чисел, если вторым аргументом было передано "even" и нечетных, 
// если было передано "odd". Оба аргумента функции обязательны. Первый обязательно будет массивом, а второй - строкой "even"/"odd".


// *****  1-ый способ. (через условную конструкцию с методом filter и стрелочную) ****
function getNumbersByParity(data, parity) {
    if (parity === 'even') {
       return data.filter(number => number % 2 === 0);
    } 
    if (parity === 'odd') {
        return data.filter(number => number % 2 !== 0);
    }
   };
   
const data = [1, 2, 3, 4, 5, 6];
   
   console.log(getNumbersByParity(data, 'even')); // [2, 4, 6];
   console.log(getNumbersByParity(data, 'odd')); // [1, 3, 5];`


// *****  2-ой способ. (через условную конструкцию с циклом) ****

function getNumbersByParity(data, parity) {
    let currentlyArr = [];
    if (parity === 'even') {
        for(let i = 0; i < data.length; i++) {
            if (data[i] % 2 === 0) {
                currentlyArr.push(data[i]) 
            }
        }
    } else if (parity === 'odd') {
        for(let i = 0; i < data.length; i++) {
            if (data[i] % 2 !== 0) {
                currentlyArr.push(data[i])
            }
        }
    }
    return currentlyArr;
}
const data = [1, 2, 3, 4, 5, 6]
console.log(getNumbersByParity(data, 'even'))
console.log(getNumbersByParity(data, 'odd'))

//*********************************

// *****  3-ий способ. (через switch) ****