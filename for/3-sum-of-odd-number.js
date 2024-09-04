// Subtask-1:

// Display sum of all the odd numbers from 91 to 129
// total = 0
// for (let i = 91; i <= 192; i++){
//     if(i % 2 !== 0 ){
//         total = i + total
//         console.log(i)
//         console.log('total', total)
//     }
// }

// Subtask-2:
// Display sum of all the even numbers from 51 to 85.

sum = 0;

for(let i = 51; i<=85; i++){
    if(i % 2 === 0){
        console.log(i)
        sum = sum + i
        console.log("total", sum)
    }
    
}
console.log("the total sum is ", sum)