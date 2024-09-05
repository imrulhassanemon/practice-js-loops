

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

sum = 0
num = 81;

while(num <= 131){
    if(num % 2 !== 0){
        console.log(num)
        sum = sum + num
        console.log("sum", sum)
    }
    num++
}
console.log("total sum from 81 to 131 is ", sum)


/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

total  =  0;
numbers = 206;

while(numbers<=311){
    if(numbers % 2 === 0){
        console.log(numbers)
        total = total + numbers
        console.log("total", total)
    }
    numbers++
}
console.log("total even number from 206 to 311 is ", total)