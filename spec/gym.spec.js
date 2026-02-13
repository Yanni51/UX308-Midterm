import { gymCost } from "../src/gym.js"

describe("gymCost", function(){

    it("0 friends no discount", function(){
        expect(gymCost(100,0)).toBe(100)
    })

    it("1 friend 5% discount", function(){
        expect(gymCost(100,1)).toBe(95)
    })

    it("2 friends 10% discount", function(){
        expect(gymCost(100,2)).toBe(90)
    })

    it("3 friends 15% discount", function(){
        expect(gymCost(100,3)).toBe(85)
    })

    it("4 friends still 15% discount", function(){
        expect(gymCost(100,4)).toBe(85)
    })
})