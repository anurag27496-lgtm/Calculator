function setChar(char){
    document.getElementById("getNum").value += char; 
}

function cal(){
    document.getElementById("getNum").value=eval(document.getElementById("getNum").value);
}

function clearTextBox(){
    document.getElementById("getNum").value= "";
}