for (let num = 2; num <= 50; num++) {
    let primo = true; // assumimos que o número é primo

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primo = false; // encontramos um divisor, não é primo
        }
    }

    if (primo) {
        console.log("É primo: " + num);
    }
}
