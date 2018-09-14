// JavaScript source code

function validateInput(arg1) {
    //var ime = document.getElementById("ime");
    if (arg1.value == "")
    {
        arg1.className = "error";
        return false;
    }
    else {
        arg1.className = "";
        return true;
    }
}