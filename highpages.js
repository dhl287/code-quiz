var InitialsText = document.getElementById("initialInput");
  
function submitInitials() {
  InitialsText.value = "";
    localStorage.getItem("InitialsText", InitialsText);
    window.location
    console.log(InitialsText + " scored " + score + ".");
}