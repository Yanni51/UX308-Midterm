import { fahrenheitToCelsius } from "../src/temperature.js"

describe("fahrenheitToCelsius", function(){

    it("freezing point", function(){
        expect(fahrenheitToCelsius(32)).toBe(0)
    })

    it("boiling point", function(){
        expect(fahrenheitToCelsius(212)).toBe(100)
    })

    it("room temperature (70F)", function(){
        expect(fahrenheitToCelsius(70)).toBeCloseTo(21.11, 1)
    })

})