const {getTotalScore, getBestScore} = require("./BowlingScoreFinder")

describe('finding bestScore and totalScore in Bowling Game',()=>
{
    describe('total score in bowling game',()=>{
        if('should return total score when input elements is less than 20',()=>{
            expect(getTotalScore([3,6])).toEqual(90)
        })
    })
})