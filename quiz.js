// Function to check the user's answer
function checkAnswer() {
    // Correct answer is "4"
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedback = document.getElementById("feedback");
    
    // Check if the user has selected an answer
    if (userAnswer) {
        // Compare the user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green"; // Display success message in green
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red"; // Display error message in red
        }
    } else {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange"; // Display message in orange if no selection
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);