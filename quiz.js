// Function to check the user's answer
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";
    
    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer was selected
    if (userAnswer) {
        // Compare the selected answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            // If correct, display success message
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            // If incorrect, display error message
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected, prompt the user to choose an option
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add an event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
