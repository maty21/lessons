//decleration 
let a = 5;
a = 6;
const b =8;
//_________________________________

//functions 
function b(a, c) {
    return a + c;
}

let aa = (a, c) => a + c;

console.log(aa(1, 2));
//_________________________________



//for loop 
const a = [1, 2, 3]

const sum = (aaa) =>{
    let temp =0;
    console.log(`array size ${aaa.length}`);
    for (var i = 0; i < aaa.length; i++) {
        console.log(`current sum is ${temp} current i ${i} current value in array ${aaa[i]}`);
        temp = temp+aaa[i];
    }
    return temp
}

console.log(sum(a));
//_________________________________

// exercise: 
// one function which takes an array of five numbers and mutiple each on by a number
// function(array,multipleNumber)
// and then will call other function which run in interval and print only the odd places in the array
