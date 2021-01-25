let msg1 = "This game is under construction. Some parts may not be functional. Please report any problems you encounter to: XXXXX@XX.com";
alert(msg1);
var character = document.getElementById("character");
var block = document.getElementById("block")

function jump() {
    character.classList.add("animate");
    if (charcater.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500);
}