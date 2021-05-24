/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
function fValidarTarjeta(){
    var opt = $("#lstTipoTarjeta option:selected").val();
    // eslint-disable-next-line no-undef
    codigo = $("#numero-tarjeta").val().replace('-', '');
    var msg = "Valor incorrecto";
    // eslint-disable-next-line no-undef
    VISA = /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
    // eslint-disable-next-line no-undef
    MASTERCARD = /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9] {2} {4}$/;
    // eslint-disable-next-line no-undef
    

    // eslint-disable-next-line no-undef
    $("#tarjeta .numero").html("");
    // eslint-disable-next-line no-undef
    if(luhn(codigo)){
        if(opt == "VISA" && !codigo.match(VISA)){
            alert(msg);
        }
        if(opt == "MASTERCARD" && !codigo.match(MASTERCARD)){
            alert(msg);
        }
        
    } else {
        alert(msg);
    }
}
function luhn(value) {
    // Acepta solo digitos.
    if(valorInput == ''){
        numeroTarjeta.textContent = '#### #### #### #####';}
    formulario.inputNumero.value = valorInput
    if (/[^0-9-\s]+/.test(value)) return false;
    // El Algoritmo de Luhn.
    let nCheck = 0, bEven = false;
    value = value.replace(/\D/g, "");
    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n),
        nDigit = parseInt(cDigit, 10);
        if (bEven && (nDigit *= 2) > 9) nDigit -= 9; nCheck +=  nDigit; bEven = !bEven;
    }
    return (nCheck % 10) == 0;
}

    btnEnviar.addEventListener('click', () =>{
    btnEnviar.classList.toggle('active');
    
});
    