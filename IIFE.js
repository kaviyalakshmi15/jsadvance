// Reason 1

const x = "Whatever";

const helloworld = () => "Hello World!";

(() => {
    const x = "life whatever";
    const helloworld = () => "Hello IIFE!";
    console.log(x);
    console.log(helloworld());
})();

console.log(x);
console.log(helloworld());

// Reason 2

const increment = (() => {
    let counter = 0;
    console.log(counter);
    const credits = (num) => console.log('I have ${num} credit(s).');
    return () => { counter++; credits(counter); }
})();

increment();
increment();
credits(3);

/Reason 3

const Score = (() => {
    let count = 0;

    retiurn {
        current: () => { return count },
        increment: () => { count++ },
        reset: () => { count = 0 }
    }
})();

Score.increment();
console.log(score.current());
score.increment();
console.log(score.current());
score.reset();
console.log(score.current());
