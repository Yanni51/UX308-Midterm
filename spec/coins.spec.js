import { coinTotal } from "../src/coins.js"

describe("coinTotal", function(){

    it("calculates mixed coins", function(){
        expect(coinTotal(1,1,1,1,1)).toBe(3.40)
    })

    it("calculates multiple coins", function(){
        expect(coinTotal(2,2,2,2,2)).toBe(6.80)
    })

    it("returns 0 when all are zero", function(){
        expect(coinTotal(0,0,0,0,0)).toBe(0)
    })

})