import { earthquakeDamage } from "../src/earthquake.js"

describe("earthquakeDamage", function(){
    it("little damage", function(){
        expect(earthquakeDamage(4)).toBe("Little or no damage")
    })
    it("some damage", function(){
        expect(earthquakeDamage(5.2)).toBe("Some damage")
    })
    it("serious damage", function(){
        expect(earthquakeDamage(6)).toBe("Serious damage: walls may crack or fall")
    })
    it("disaster", function(){
        expect(earthquakeDamage(7)).toBe("Disaster: buildings may collapse")
    })
    it("catastrophe", function(){
        expect(earthquakeDamage(8)).toBe("Catastrophe: most buildings destroyed")
    })

})