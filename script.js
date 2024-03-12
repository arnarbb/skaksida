function updateWinner() {
    var halliScoreText = document.getElementById("halliscore").innerText; // Get Halli's score as text
    var allibScoreText = document.getElementById("allibscore").innerText; // Get Allib's score as text

    var halliScore = parseInt(halliScoreText); // Convert Halli's score to a number
    var allibScore = parseInt(allibScoreText); // Convert Allib's score to a number

    // Determine the winner or if it's a tie
    if (halliScore > allibScore) {
        document.getElementById("result").innerText = "HALLI is winning!";
    } else if (allibScore > halliScore) {
        document.getElementById("result").innerText = "ALLIB is winning!";
    } else {
        document.getElementById("result").innerText = "It's a tie!";
    }
}

function updateScoresSumAlli() {
    var halliScoreText = document.getElementById("halliscore").innerText; // Get Halli's score as text
    var allibScoreText = document.getElementById("allibscore").innerText; // Get Allib's score as text

    var halliScore = parseInt(halliScoreText); // Convert Halli's score to a number
    var allibScore = parseInt(allibScoreText); // Convert Allib's score to a number

    if (isNaN(halliScore)) halliScore = 0; // Ensure halliScore is a number for calculation
    if (isNaN(allibScore)) allibScore = 0; // Ensure allibScore is a number for calculation

    var totalScore = halliScore + allibScore; // Add both scores together

    var allip = allibScore / totalScore * 100;

    // Update the 'result' element with the sum of the scores
    document.getElementById("resultpAlli").innerText = "ALLI " + allip + "%";
}

function updateScoresSumHalli() {
    var halliScoreText = document.getElementById("halliscore").innerText; // Get Halli's score as text
    var allibScoreText = document.getElementById("allibscore").innerText; // Get Allib's score as text

    var halliScore = parseInt(halliScoreText); // Convert Halli's score to a number
    var allibScore = parseInt(allibScoreText); // Convert Allib's score to a number

    if (isNaN(halliScore)) halliScore = 0; // Ensure halliScore is a number for calculation
    if (isNaN(allibScore)) allibScore = 0; // Ensure allibScore is a number for calculation

    var totalScore = halliScore + allibScore; // Add both scores together
    var hallip = halliScore / totalScore * 100;

    // Update the 'result' element with the sum of the scores
    document.getElementById("resultpHalli").innerText = "Halli " + hallip+"%";
}


// Ensuring the DOM is fully loaded before attaching the function to an event or calling it
document.addEventListener("DOMContentLoaded", function() {
    updateScoresSumAlli();
    updateScoresSumHalli(); // Call the function to update scores sum
});




document.addEventListener("DOMContentLoaded", updateWinner);

// Set up an interval to periodically check the scores and update the winner
setInterval(updateWinner, 1000); // Adjust the interval as needed (1000 milliseconds = 1 second)

