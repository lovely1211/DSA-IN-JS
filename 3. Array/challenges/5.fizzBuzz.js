// 1. Print numbers from 1 to n
// 2. If number is divisible by 3, print "Fizz"
// 3. If number is divisible by 5, print "Buzz"
// 4. If number is divisible by 3 and 5, print "FizzBuzz"
// 5. Else, print the number

function fizzBuzz(n) {
    for(let i=1; i<=n; i++) {
        if(i % 3 === 0 && i % 5 === 0){
            console.log(`${i} divisble by 3 and 5 -------- FizzBuzz`)
        }else if(i % 5 === 0){
            console.log(`${i} divisble by 5 -------- Buzz`)
        }else if(i % 3 === 0){
            console.log(`${i} divisble by 3  -------- Fizz`)
        }else{
            console.log(i)
        }
    }
}

fizzBuzz(30);