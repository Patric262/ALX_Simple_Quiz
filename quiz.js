// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";
    
    // Get the selected answer from the radio buttons
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // If no answer is selected, return without feedback
    if (!userAnswer) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }
    
    // Compare the user's answer with the correct answer
    if (userAnswer.value === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
