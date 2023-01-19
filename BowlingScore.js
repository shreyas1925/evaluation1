let frames = 10


const getTotalScore = (rolls) => {
    let totalScore = 0
    let frameCount = 0
    let index = 0
    while ((index < rolls.length) && (frameCount < 10)) {
        if (rolls[index] === 10) {
            totalScore += 10 + rolls[index + 1] + rolls[index + 2]
            index += 1
        } else if (rolls[index] + rolls[index + 1] === 10) {
            totalScore += 10 + rolls[index + 2]
            index += 2
        } else {
            totalScore += rolls[index] + rolls[index + 1]
            index += 2
        }
        
        frameCount += 1
    }

    return totalScore
}

const getBestScore = (games) => {
    const reducedArray = games.reduce((accum, curArray) => {
        let gameScore = getTotalScore(curArray)
        accum = Math.max(gameScore, accum)
        return accum
    }, 0)

    return reducedArray
}

let games = [
    [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],
    [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
console.log(getTotalScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]));
console.log(getTotalScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]))
console.log(getTotalScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
console.log(getBestScore(games))

module.exports = {getTotalScore,getBestScore}

