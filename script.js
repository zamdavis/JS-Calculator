function limpiar(){
    document.getElementById('shape').reset();
    document.getElementById('el-resultado').reset();
}
function sumar(){
    var x = parseInt(document.getElementById("uValueField").value);
    var y = parseInt(document.getElementById("dValueField").value);
    document.getElementById("el-resultado").innerHTML = x+y;
}
function restar(){
    var x = parseInt(document.getElementById("uValueField").value);
    var y = parseInt(document.getElementById("dValueField").value);
    document.getElementById("el-resultado").innerHTML = x-y;
}
function multiplicar(){
    var x = parseInt(document.getElementById("uValueField").value);
    var y = parseInt(document.getElementById("dValueField").value);
    document.getElementById("el-resultado").innerHTML = x*y;
}
function dividir(){
    var x = parseInt(document.getElementById("uValueField").value);
    var y = parseInt(document.getElementById("dValueField").value);
    document.getElementById("el-resultado").innerHTML = x/y;
}
