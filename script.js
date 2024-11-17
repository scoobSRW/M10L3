let soda = ['Coca-cola', 'Sprite', 'Dr. Pepper', 'Fanta', 'Mountain Dew'];

console.log(soda)

function addSoda(arr, str) {
    arr.push(str);
    return arr;
}

console.log(addSoda(soda, 'Mello Yello'))

function removeSoda(arr, str) {
    arr.pop(str);
    return arr;
}

console.log(removeSoda(soda, 'Mello Yello'))



let numbers = [38, 90, 18, 72, 37, 14, 8, 54]
console.log(numbers)

numbers.sort((a, b) => a - b)
console.log(numbers)


function doubleNumbers(arr) {
    return arr.map(num => num * 2)
}
console.log(doubleNumbers(numbers))


let numbersList = [38, 90, 18, 72, 37, 14, 8, 54]
function filterNumbers(arr) {
    return arr.filter(num => num % 2 == 1)
}
console.log(filterNumbers(numbersList))

// not sure if im supposed to return only evens or only odds so imma just put this one in too...
function filterNumbers1(arr) {
    return arr.filter(num => num % 2 == 0)
}
console.log(filterNumbers1(numbersList))

function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0)
}
console.log(sum(numbersList))

let message = "Hello, I am Scotty R. White.";
let use = "My name is:"

console.log(message.length)
console.log(message.toUpperCase())
console.log(message.toLowerCase())

console.log(use + " " + message.substring(12, 27))
// or:
console.log(message.substring(12, 27))

console.log(message.split(" "))