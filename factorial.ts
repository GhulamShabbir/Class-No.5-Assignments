function factorial (num1 : number) {
    let result = 1 
    for(let i = 1 ; i <= num1 ;i++ ){
        result *= i
    }

    console.log(`Factorial of ${num1} is ${result}.`);
    
}

factorial(15)