
// test away!

const enhancer = require("./enhancer");
const { describe } = require('yargs');
const { it, expect, test } = require('@jest/globals');


// test("testing works", () => {
//             expect(1+1).toBe(2)
//         })


///!!! Why does describe not work??? 

// describe("enhancer unit tests", () => {
//     it("testing works", () => {
//         expect(1+1).toBe(2)
//     })

//     it("repairs", () => {
//         expect(enhancer.repair({name: "one", durability: 0, enhancement: 20 })).toEqual({name: "one", durability: 100, enhancement: 20})


// })

test("repair test", () => {
    expect(enhancer.repair({name: "one", durability: 0, enhancement: 20 })).toEqual({name: "one", durability: 100, enhancement: 20})

    expect(enhancer.repair({name: "two", durability: 100, enhancement: 20 })).toEqual({name: "two", durability: 100, enhancement: 20 })


    expect(enhancer.repair({name: "three", durability: 35, enhancement: 20 })).toEqual({name: "three", durability: 100, enhancement: 20 })

})

test("enhancement success test", () => {
    expect(enhancer.success({name: "one", durability: 0, enhancement: 20 })).toEqual({name: "one", durability: 0, enhancement: 20})

    expect(enhancer.success({name: "two", durability: 50, enhancement: 16 })).toEqual({name: "two", durability: 50, enhancement: 17})
})

test("enhancement fail test", () => {
    expect(enhancer.fail({name: "one", durability: 50, enhancement: 10 })).toEqual({name: "one", durability: 45, enhancement: 10})

    expect(enhancer.fail({name: "two", durability: 50, enhancement: 15 })).toEqual({name: "two", durability: 40, enhancement: 15})

    expect(enhancer.fail({name: "three", durability: 50, enhancement: 18 })).toEqual({name: "three", durability: 40, enhancement: 17})
})
