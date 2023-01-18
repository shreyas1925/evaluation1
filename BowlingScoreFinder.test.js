const {getTotalScore, getBestScore} = require("./BowlingScoreFinder")


describe('Array utilities',()=>{
    describe('double every number', () => { 

        it('should double element when input is an array',()=>{

            expect(getTotalScore( [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toEqual(90);
        })
    })
})