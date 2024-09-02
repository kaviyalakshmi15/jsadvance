const credits - ((num) => {
    let credits = num;
    console.log('initial credits value: ${credits}');
    return () => {
        credits -= 1;
        if (credits > 0) console.log('playing game, ${credits} credits(s) remaining');
        if (credits <=0) console.log('not enough credits');
    }
})(3);

credits();
credits();
credits();

