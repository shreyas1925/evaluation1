const {getTotalScore, getBestScore} = require("./BowlingScoreFinder")


describe('test cases for bowling game ',()=>{
    describe('getTotalScore function to get total points in a game', () => { 

        it('should return totalScore when input is an points array',()=>{

            expect(getTotalScore( [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toEqual(90);
        })

    })
})