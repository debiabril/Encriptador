const textArea= document.querySelector(".text-area");
const mensaje= document.querySelector(".mensaje");

//Filtro para que no se puedan ingresar acentos ni caracteres especiales
const regex = /^[a-z\s]*$/;
textArea.addEventListener("input", function() {
    if (!regex.test(textArea.value)) {
        textArea.value = textArea.value.replace(/[^a-z\s]/g, '');
        alert('Solo se permiten letras minúsculas sin acentos ni caracteres especiales.');
    }
});

/* Formato para encriptado
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
const matrizCodigo =  [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

function encriptar(stringEncriptada){
    stringEncriptada= stringEncriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada= stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
};
//Utilizo la función de encriptación, vacío el textarea y saco la imagen de fondo del mensaje.
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
};
function desencriptar(stringDesencriptada){
    stringDesencriptada= stringDesencriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada= stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
};
//Al igual que en la función de encriptación pero en el sentido inverso
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
};
//Permite el copiado del texto del area del mensaje y avisa al usuario que su texto ha sido copiado mediante una alerta
function btnCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Copiado");
};