//Currying example

const buildSandwich = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return '${ingredient1}, ${ingredient2}, ${ingredient3}';
        }
    }
}

const mySandwich = buildSandwich("Bacon")("Lettuce")("Tomato")
console.log(mySandwich);

// example

const curry = (fn) => {
    return curried = (...args) => {
        if (fn.length !== args.length) {
            console.log(...args);
            return curried.bind(null, ...args);
        }
        return fn(...args);
    };
}

const total = (x, y, z) => x + y + z;

const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30));