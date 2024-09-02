//impure function ex1

let x = 1;
const increment = () => x += 1;
console.log(increment());
console.log(x);

//refactored ex1

const pureIncrement = (num) => num +=1;
console.log(pureIncrement(x));
console.log(x);

//Impure example 2
const myArray = [1, 2, 3];
const addToArray = (array, data) => {
    array.push(data);
    return array;
}
console.log(addToArray(myArray, 4));
console.log(myArray);

//refactored ex2

const pureAddToArray = (array, data) => [...array, data];
console.log(pureAddToArray(myArray, 5));
console.log(myArray);

//Higher order function

const oneToFive = [1, 2, 3, 4, 5];
const oddToFive = oneToFive.filter(elem => elem % 2 !== 0);
console.log(oddToFive);

const doubled = oneToFive.map(elem => elem * 2);
console.log(doubled);

const summed = oneToFive.reduce((acc. elem) => acc + elem);
console.log(summed);

console.log(oneToFive);
