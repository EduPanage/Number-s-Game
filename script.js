start_button.onclick = () => {

    alert("Numbers Game!")

    const secretNum = Math.floor(Math.random() * 1000) + 1;
    let counter = 0;

    while (true) {

        counter++;

        let number = prompt("Choose a number between 1 and 1000: ");

        if (number == null) {
            alert("Game canceled!")
            console.log("Game canceled: Nothing inserted on then input!");
            break
        }

        else {

            console.log(`The choosen number is ${number}!`)

            if (number == secretNum) {
                alert(`Congrats! You won! Attempt: ${counter}`);
                console.log(`\n\nThe secret number was ${secretNum}`);
                console.log("Game finished!")
                break;

            } else {

                if (number < secretNum) {
                    alert(`The secret number is greater than ${number}`);
                }
                else {
                    alert(`The secret number is less than ${number}`);
                }
            }
        }
    }
}