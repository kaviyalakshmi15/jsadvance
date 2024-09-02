//compose function

const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val);

const compResult = compose(multiplyBy5, subtract1, add2)(4);
console.log(compResult);

// pipe function

const pipe = (...fns) => (val) => fns.reduce((prev, fn) => fn(prev), val);
const pipeResult = pipe(add2, subtract1, multiplyBy5)(5);
console.log(pipeResult);


// example clone the object

const scoreObj = { home: 0, away: 0 };
const shallowClone = (obj) => Array.isArray(obj) ? [...obj] : {...obj };

const increment = (obj) => {
    obj.home += 1;
    return obj;
};

const homeScore = pipe(
    shallowClone,
    incrementHome
);

console.log(homeScore(scoreObj));
console.log(scoreObj);
console.log(homeScore(scoreObj) === scoreObj);

//example 2 curry the function 

let incrementHomeB = (cloneFn) => (obj) => {
    const newObj = clone(obj);
    newObj.home += 1;
    return newObj;
}

incrementHomeB = incrementHomeB(shallowClone);

const homeScoreB = pipe(incrementHomeB);
console.log(homescoreB(scoreObj));
console.log(scoreObj);

//example 3 insert clone function

const incrementHomeC = (obj, cloneFn) => {
    const newObj = cloneFn(obj);
    newObj.home += 1;
    return newObj;
};
const homeScoreC = pipe( x => incrementHomeC(x, shallowclone));
console.log(homeScore(scoreObj));
console.log(scoreObj);