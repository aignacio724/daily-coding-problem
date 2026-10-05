/**
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 * Bonus: Can you do this in one pass?
 */

function twoSum(nums: Array<number>, k: number): boolean {
    if (nums.length === 0) {
        console.error("Input number array is empty")
        return false
    }

    const numbersMap: Record<number, number> = {}
    for(const [index, value] of nums.entries()) {
        const diff = k - value
        // console.log(diff)nod
        if (diff in numbersMap) {
            return true
        }
        numbersMap[value] = index
        // console.log(numbersMap)
    }
    return false
}

console.log(twoSum([10, 15, 3, 7], 17)) // true
console.log(twoSum([1, 2, 3], 100))     // false
