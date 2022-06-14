// Player name
var player1 = "Player 1";
var player2 = "Player 2";
var player3 = "Player 3";

// Function to roll the dice
function rollTheDice() {
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        var randomNumber3 = Math.floor(Math.random() * 6) + 1;

        document.getElementById('member-1').innerText = randomNumber1;
        document.getElementById('member-2').innerText = randomNumber2;
        document.getElementById('member-3').innerText = randomNumber3;



        if (randomNumber1 == randomNumber2 && randomNumber1 > randomNumber3) {
            document.querySelector("#winner").innerHTML = (player1 + " and " + player2 + " Draw!");
            document.getElementById('member-1').style.color = "blue";
            document.getElementById('member-2').style.color = "blue";
            document.getElementById('member-3').style.color = "red";
            if (randomNumber1 == randomNumber2 && randomNumber1 < randomNumber3) {
                document.querySelector("#winner").innerHTML = (player1 + " and " + player2 + " Draw!");
                document.getElementById('member-1').style.color = "blue";
                document.getElementById('member-2').style.color = "blue";
                document.getElementById('member-3').style.color = "green";
            }
        }
        else if (randomNumber2 == randomNumber3 && randomNumber2 > randomNumber1) {
            document.querySelector("#winner").innerHTML = (player2 + " and " + player3 + " Draw!");
            document.getElementById('member-2').style.color = "blue";
            document.getElementById('member-3').style.color = "blue";
            document.getElementById('member-1').style.color = "red";
            if (randomNumber2 == randomNumber3 && randomNumber2 < randomNumber1) {
                document.querySelector("#winner").innerHTML = (player2 + " and " + player3 + " Draw!");
                document.getElementById('member-2').style.color = "blue";
                document.getElementById('member-3').style.color = "blue";
                document.getElementById('member-1').style.color = "green";
            }
        }
        else if (randomNumber3 == randomNumber1 && randomNumber3 > randomNumber2) {
            document.querySelector("#winner").innerHTML = (player1 + " and " + player3 + " Draw!");
            document.getElementById('member-1').style.color = "blue";
            document.getElementById('member-3').style.color = "blue";
            document.getElementById('member-2').style.color = "red";
            if (randomNumber3 == randomNumber1 && randomNumber3 < randomNumber2) {
                document.querySelector("#winner").innerHTML = (player2 + " and " + player3 + " Draw!");
                document.getElementById('member-1').style.color = "blue";
                document.getElementById('member-3').style.color = "blue";
                document.getElementById('member-2').style.color = "green";
            }
        }
        else if (randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3) {
            document.querySelector("#winner").innerHTML = (player1 + " WINS!");
            document.getElementById('member-1').style.color = "green";
            if (randomNumber2 > randomNumber3) {
                document.getElementById('member-2').style.color = "yellow";
                document.getElementById('member-3').style.color = "red";
            }
            else if (randomNumber3 > randomNumber2) {
                document.getElementById('member-3').style.color = "yellow";
                document.getElementById('member-2').style.color = "red";
            }
            else {
                document.getElementById('member-2').style.color = "blue";
                document.getElementById('member-3').style.color = "blue";
            }
        }
        else if (randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3) {
            document.querySelector("#winner").innerHTML = (player2 + " WINS!");
            document.getElementById('member-2').style.color = "green";
            if (randomNumber1 > randomNumber3) {
                document.getElementById('member-1').style.color = "yellow";
                document.getElementById('member-3').style.color = "red";
            }
            else if (randomNumber3 > randomNumber1) {
                document.getElementById('member-3').style.color = "yellow";
                document.getElementById('member-1').style.color = "red";
            }
            else {
                document.getElementById('member-1').style.color = "blue";
                document.getElementById('member-3').style.color = "blue";
            }
        }
        else {
            document.querySelector("#winner").innerHTML = (player3 + " WINS!");
            document.getElementById('member-3').style.color = "green";
            if (randomNumber1 > randomNumber2) {
                document.getElementById('member-1').style.color = "yellow";
                document.getElementById('member-2').style.color = "red";
            }
            else if (randomNumber2 > randomNumber1) {
                document.getElementById('member-2').style.color = "yellow";
                document.getElementById('member-1').style.color = "red";
            }
            else {
                document.getElementById('member-1').style.color = "blue";
                document.getElementById('member-2').style.color = "blue";
            }
        }
    }, 1000);
}