function fizzbuzz(n: number): string {
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    }
    if (n % 3 === 0) {
        return "Fizz";
    }
    if (n % 5 === 0) {
        return "Buzz";
    }
    return n.toString();
}

function main(): void {
    for (let i = 1; i <= 100; i++) {
        console.log(fizzbuzz(i));
    }
}

main();