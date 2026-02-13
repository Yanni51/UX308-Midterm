import { cubeVolume } from "../src/cube.js"

describe("cubeVolume", function(){

    it("volume of cube height 2", function(){
        expect(cubeVolume(2)).toBe(8)
    })

    it("volume of cube height 3", function(){
        expect(cubeVolume(3)).toBe(27)
    })

    it("volume of cube height 5", function(){
        expect(cubeVolume(5)).toBe(125)
    })

})