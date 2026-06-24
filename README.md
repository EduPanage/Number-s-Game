# Secret Number Game

A simple web application built with **HTML, CSS, and JavaScript** where the player must guess a randomly generated secret number between **1 and 1000**.

This project was developed to practice core JavaScript concepts such as DOM manipulation, event handling, conditional logic, loops, random number generation, and user interaction.

## Features

* Generate a random secret number between 1 and 1000.
* Interactive user interface without using browser prompts.
* Input field for guesses.
* Real-time feedback indicating whether the secret number is higher or lower.
* Attempt counter.
* Restart game functionality.
* Console logs for debugging and learning purposes.
* Responsive and modern UI design.

## Technologies

* HTML5
* CSS3
* JavaScript (Vanilla JS)

## How It Works

When the player clicks the **Start** button, the game generates a random secret number and displays the guessing interface.

```javascript
const secretNumber = Math.floor(Math.random() * 1000) + 1;
```

The player enters a number and clicks **Guess**.

The application compares the value entered with the secret number and displays a hint:

```javascript
if (num < secretNumber) {
    p.innerHTML = `The secret number is bigger than ${num}`;
} else {
    p.innerHTML = `The secret number is less than ${num}`;
}
```

When the correct number is found, the game displays a victory message along with the total number of attempts.

The **Restart** button creates a new secret number and starts a new game session.

## Running the Project

1. Clone the repository.

2. Open the project folder.

3. Run the `index.html` file in your browser.

4. Click **Start**.

5. Enter guesses until you discover the secret number.

## Preview

<img width="593" height="502" alt="image" src="https://github.com/user-attachments/assets/91ac760a-ba61-4b51-a8e6-e7a9b00cfb53" />


## Project Structure

```text
secret-number-game/
│
├── index.html
├── style.css
├── script.js
```

## Learning Objectives

This project was created to practice:

* DOM manipulation
* Event handling
* Conditional statements (`if/else`)
* Variables and constants
* Random number generation
* JavaScript functions
* User interface updates
* CSS Flexbox
* Responsive layouts

## Future Improvements

* Difficulty levels (Easy, Medium, Hard).
* Maximum attempt limit.
* Score system.
* Best score persistence using Local Storage.
* Dark/Light theme switcher.
* Sound effects and animations.
* Mobile-first enhancements.

## Preview Screenshot

The application features a modern card-based interface with:

* Gradient background.
* Responsive layout.
* Interactive buttons.
* Dynamic game messages.
* Clean and minimal design.

## License

This project is available for educational purposes and personal learning.
