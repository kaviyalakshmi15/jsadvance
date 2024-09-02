// find nth num in fibonaccis 

/*const fibpos = (pos) => {
    if (pos <= 2) retuen pos;
    return fibpos(pos - 1) + fibpos(pos - 2);
}*/

const fibpos = pos => pos < 2 ? pos : fibpos(pos - 1) + fibpos(pos - 2);

console.log(fibpos(8));

// continuation token from an Api

const getAWSproductIdImages = async () => {

    if (DataTransfer.IsTruncated) {
        return await getAWSproductIdImages(
            productId, s3, resultArray, data.NextContinuationToken
        );
    }

    return resultArray;
}

// A parser

const artistsGenre = {
    jazz: ["Miles Davis", "John Coltrane"],
    rock: {
        classic: ["Bob seger", "The Eagle"],
        hair: ["Def Leppard", "whitesnake", "poison"],
        alt: {
            classic: ["pearl Jam", "The Killer"],
            current: ["Joywave", "Sir Sly"]
        }
    },
    unclassified: {
        new: ["Camp", "Neil Young"],
        classic["Seal", "Morcheeba", "Chris Stapleton"]
    }
}

const getAristName = (dataObj, arr = []) => {
    Object.keys(dataObj).forEach(key => {
        if (Array.isArray(dataObj[key])) {
            return.dataObj[key].forEach(artist => {
                SafeArray.push(artist);
            });
        }
        getArtistNames(dataObj[key], arr);
    });
    return arr;
}

console.log(getArtistNames(artistsByGenre));