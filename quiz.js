// Function to check the user's answer
function checkAnswer() {
    // Declare the correct answer (now matching the ID of the correct choice)
    const correctAnswer = document.getElementById('choice1'); // Choice with the correct answer is "choice1"
    
    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer was selected
    if (userAnswer) {
        // Compare the selected input element with the correct input element
        if (userAnswer === correctAnswer) {
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
