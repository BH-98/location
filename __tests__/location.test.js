const updateRemoteStudents = require("../location")

describe("updateRemoteStudents", () => {
    test("returns an array", () => {
        expect(Array.isArray(updateRemoteStudents([]))).toBe(true)
    })
    test("returns a new array", () => {
        const testArray = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
          ]
        expect(updateRemoteStudents(testArray)).not.toBe(testArray)
    })
    test("does not mutate original array", () => {
        const testArray = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
          ]
        const testArrayClone = [...testArray]
        updateRemoteStudents(testArray)
        expect(testArray).toEqual(testArrayClone)
    })
    test("returns new updated objects array", () => {
        const testArray = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
          ]
          const expected = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' }
          ]
        const result = updateRemoteStudents(testArray)
        expect(result).toEqual(expected)
    })
})
