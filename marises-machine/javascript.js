function converter() {

// Conversões de decimal para outras bases

let valorDecimal = Number(input_valor_decimal.value);

let valor10a2 = valorDecimal.toString(2);
let valor10a8 = valorDecimal.toString(8);
let valor10a16 = valorDecimal.toString(16);

let conv10a2 = document.getElementById("resultado_decimal_binario");
let conv10a8 = document.getElementById("resultado_decimal_octal");
let conv10a16 = document.getElementById("resultado_decimal_hexadecimal");

conv10a2.innerHTML = `${valor10a2}`;
conv10a8.innerHTML = `${valor10a8}`;
conv10a16.innerHTML = ` ${valor10a16.toUpperCase()}`;

}