const  {getTotalScore,getBestScore} = require("./BowlingScore")

describe('Calculates the score in the bowling game',()=>{

    it('should give 30 score when scored set1',()=>{
        const set1=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]
        expect(getTotalScore(set1)).toBe(30)
    })

    it('should give 90 when scored set2',()=>{
        const set2=[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]
        expect(getTotalScore(set2)).toBe(90)
    })

    it('should give 16 when scored set3',()=>{
        const set2=[6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        expect(getTotalScore(set2)).toBe(16)
    })
    // it('should give 16 when scored set3',()=>{
    //     const set2=[10, 9, 1, 10, 4, 5, 3, 6, 4, 4, 1, 3, 10, 1, 9, 5, 5, 2]
    //     expect(getTotalScore(set2)).toBe(138)
    // })
    it("testcase 4", () => {
        expect(getTotalScore([8, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(15)
    })
    it('should give 16 when scored set3',()=>{
        const set2=[10, 10, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        expect(getTotalScore(set2)).toBe(81)
    })
    it('should give 16 when scored set3',()=>{
        const set2=[10, 5, 5, 9, 0]
        expect(getTotalScore(set2)).toBe(48)
    })
    it('should give 16 when scored set3',()=>{
        const set2=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 10]
        expect(getTotalScore(set2)).toBe(20)
    })
    it('should give 360 when all frames are strike', () => {
        const allStrikes = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
        expect(getTotalScore(allStrikes)).toBe(300)
})
})