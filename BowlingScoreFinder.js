// let frames = 10

let frames = []
let sum = 0

let maxi = 0


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

    if(!Array.isArray(rolls))
    {
        throw new Error("Input is not an array")
    }

    for (let i = 0; i < rolls.length;) {

        // creating a frame

        if (rolls[i] != 10) {
            let newarr = []
            newarr.push(rolls[i])
            newarr.push(rolls[i + 1])
            frames.push(newarr)
        }
        if (rolls[i] == 10) {
            while (rolls[i] != 10) {
                let newarr = []
                newarr.push(rolls[i])
            }
        }

        // basic test case for total score 

        if(rolls[i] == 10){
            sum+= 10 + rolls[i+1] + rolls[i+2]
            i++
            
        }

        else if(rolls[i]+rolls[i+1] === 10){
            sum+= 10 + rolls[i+2]
            i+=2
            
        }
        
        else{

        sum += rolls[i] + rolls[i + 1];
        i+=2
        

        }
    }
    // console.log(`Total score is ${sum}`)
    return sum
}

let rolls = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]

// let rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]


let totalSum = getTotalScore(rolls)
console.log(totalSum)

console.log(frames)

let bestScore = getBestScore(frames)
console.log(bestScore)

module.exports = { getBestScore,getTotalScore}