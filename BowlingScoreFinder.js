// let frames = 10

let frames = []
let sum = 0

let maxi = 0

// if no strike had happened

const getBestScore = (frames) => {

    frames.forEach(array => {
        let runningSum = array[0] + array[1]

        if (runningSum > maxi) {
            maxi = runningSum
        }

    })

    return maxi;

}

const getTotalScore = (rolls) => {
    for (let i = 0; i < rolls.length; i ++) {

        if (rolls[i] !=10) {

            let newarr = []
            newarr.push(rolls[i])
            newarr.push(rolls[i + 1])
            frames.push(newarr)

        }
        if(rolls[i]==10)
        {
            while (rolls[i] != 10) {
                let newarr = []
                newarr.push(rolls[i])
            }
        
        }

        sum += rolls[i] + rolls[i + 1];
    }
    console.log(`Total score is ${sum}`)
    return frames
}

let rolls = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]
// let rolls = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]

let resframes = getTotalScore(rolls)
console.log(resframes)
let bestScore = getBestScore(resframes)
console.log(bestScore)
