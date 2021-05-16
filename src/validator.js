
function validate(n){
    const digits = n.toString().split('').map(Number);

    // if it´s an even number
    if(digits.length % 2 ===0){
        
    }

    console.log(digits)

}
var owner = $('#owner'),
    cardNumber = $('#cardNumber'),
    cardNumberField = $('#card-number-field'),
    CVV = $("#cvv"),
    mastercard = $("#mastercard"),
    confirmButton = $('#confirm-purchase'),
    visa = $("#visa"),
    