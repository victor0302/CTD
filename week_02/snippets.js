function repeat(x){
    while(x>0){
        console.log("Hello World!")
        x = x-1
    }
}
repeat(2)

function pyramidCounting(x){
    let sum = 0
    for(let i=0;i<= x;i++){
        sum = i + sum
    }
    return sum
}

function noVowels(text){
    let vowels = ["a","e","i","o","u"]
    let newString = ""
    for(let letter of text){
        if(!vowels.includes(letter)){
            newString = newString + letter
        }
        else{
            continue
        }
    }
    return newString
}

function vowelCount(text){
    let vowels = ["a","e","i","o","u"]
    let count = 0
    for(let letter of text){
        if(vowels.includes(letter.toLowerCase())){
            count ++
        }
        else{
            continue
        }
    }
    return count
}

function numOfOdds(x){
    let count = 0
    for(let i=0;i<=x;i++){
        if(i % 2 !== 0){
            count ++
        }
    }
    return count
}

let empty = []
let full = [0,1,2,3]
function arrayChecker(x){
    if(x.length===0){
        return true
    }
    else{
        return false
    }
}

function getElementAt(array,integer){
    if (array.length<= integer){
        return null
    }
    return(array[integer])
}

function insertInArray(array){
    let newArray = array.slice()
    let copy = newArray.splice(1,0,0)
    return newArray
}

function compareArrays(firstArray, secondArray){
    if(firstArray.length !== secondArray.length){
        return false
    }
    for (let firstElement in firstArray){
        if(firstArray[firstElement] === secondArray[firstElement]){
            continue
        }
        else{
            return false
        }
    }
    return true
}

let numbers = [10,3,4]
function calculateTotal(array){
    let sum = 0
    for(let i =0; i < array.length; i++){
        sum = array[i] + sum
    }
    return sum
}

function findEvens(array){
    let newArray = []
    for(let i =0; i<array.length;i++){
        if(array[i] % 2 == 0){
            newArray.push(array[i])
        }
        else{
            continue
        }
    }
    return newArray
}

function findOdds(array){
    let newArray = []
    for(let i =0; i<array.length;i++){
        if(array[i] % 2 !== 0){
            newArray.push(array[i])
        }
        else{
            continue
        }
    }
    return newArray
}

function makeSquares(array){
    let newArray = []
    for(let i =0; i < array.length; i++){
        let squared = array[i] * array[i]
        newArray.push(squared)
    }
    return newArray
}

function displaySkills(array){
    for(let i =0; i <array.length; i++){
        console.log(array[i])
    }
}

function fizzBuzz(){
    let newArray = []
    for(let i=1;i < 16; i++){
        if(i % 3===0 && i % 5===0){
            newArray.push("fizzbuzz")
        }
        else if(i%3==0){
            newArray.push("fizz")
        }
        else if(i%5===0){
            newArray.push("buzz")
        }
        else{
            newArray.push(i)
        }
    }
    return newArray
}

let globalVar = "globalVar"
function testScope(){
    let functionVar = "functionVar"
}
//console.log(functionVar)
{
    let blockVar = "blockVar"
}
//console.log(blockVar)