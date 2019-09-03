//Funktion som hämtar value från input och omvandlar sammtidigt 
//till uppercase.

function myFunction() {
    let x = document.getElementById("textArea").value.toUpperCase();
    document.getElementById("textArea").value = x;
}
//Hämta id för knapp och en eventlistener för click och funktionen ovanför
document.getElementById("myBtn").addEventListener("click", myFunction);