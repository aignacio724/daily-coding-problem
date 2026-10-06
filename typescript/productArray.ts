/**
 * Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
 * Follow-up: what if you can't use division?
 */

function productArray(nums: Array<number>): Array<number> {
    const result: Array<number> = []
    let totalProduct = 1

    // Get total product
    for (const num of nums) {
        totalProduct *= num
    }
    console.log(totalProduct)

    for (const num of nums) {
        result.push(totalProduct / num)
    }

    return result
}

// console.log(productArray([1, 2, 3, 4, 5]))
// console.log(productArray([3, 2, 1]))

// Keep a running product in one variable and write straight into result
function productArrayNoDivision(nums: Array<number>): Array<number> {
    const result: Array<number> = new Array(nums.length)

    // result[i] = product of everything to the left of i
    let prefix = 1
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix
        prefix *= nums[i]
        // console.log('prefix ', prefix)
    }
    // console.log('prefix products ', result)
    // multiply in the product of everything to the right of i
    let suffix = 1
    for (let i = nums.length-1; i >= 0 ; i--) {
        result[i] *= suffix
        suffix *= nums[i]
        // console.log('suffix ', suffix)
    }
    return result

}

console.log(productArrayNoDivision([1, 2, 3, 4, 5]))
console.log(productArrayNoDivision([3, 2, 1]))