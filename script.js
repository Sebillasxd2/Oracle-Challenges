const texto = document.querySelector("#texto1");
const resultado = document.querySelector("#texto2");

function btnEncriptar(){
    const textoEncriptado = encriptar(texto.value);
    resultado.value = textoEncriptado;
    texto.value="";
}

function encriptar(mensaje){
    let matrizEncriptado = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    mensaje = mensaje.toLowerCase();
    verificar = mensaje.toLowerCase();
    for(let i = 0; i < matrizEncriptado.length; i++){
        if(mensaje.includes(matrizEncriptado[i][0])){
            mensaje = mensaje.replaceAll(matrizEncriptado[i][0],matrizEncriptado[i][1]);   
        }
    }
    if(verificar === mensaje){
        alert("El texto no puede ser encriptado, no hay nada que desencriptar.");
        mensaje = "";
        return mensaje;
    }else{
    return mensaje;}
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(texto.value);
    resultado.value = textoEncriptado;
    texto.value="";
}

function desencriptar(mensaje){
    let matrizEncriptado = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    mensaje = mensaje.toLowerCase();
    verificar = mensaje.toLowerCase();

    for(let i = 0; i < matrizEncriptado.length; i++){
        if(mensaje.includes(matrizEncriptado[i][1])){
            mensaje = mensaje.replaceAll(matrizEncriptado[i][1],matrizEncriptado[i][0]);   
        }
    }
    if(verificar === mensaje){
        alert("El texto no puede ser desencriptado, no hay nada que desencriptar.");
        mensaje = "";
        return mensaje;
    }else{
    return mensaje;
}}

function copiar(){
    const mensajecopiado = document.querySelector(".textoresuelto");
    mensajecopiado.select();
    document.execCommand('copy');
}
