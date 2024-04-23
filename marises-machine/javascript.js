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

let valorOctal = Number(input_valor_octal.value);

let conv8a2 = document.getElementById("resultado_octal_binario");
let conv8a10 = document.getElementById("resultado_octal_decimal");
let conv8a16 = document.getElementById("resultado_octal_hexadecimal");

let octalDecimal = parseInt(valorOctal, 8);

conv8a2.innerHTML = `${octalDecimal.toString(2)}`;
conv8a10.innerHTML = `${parseInt(valorOctal, 8)}`;
conv8a16.innerHTML = ` ${(octalDecimal.toString(16)).toUpperCase()}`;

let valorBinario = Number(input_valor_binario.value);

let conv2a8 = document.getElementById("resultado_binario_octal");
let conv2a10 = document.getElementById("resultado_binario_decimal");
let conv2a16 = document.getElementById("resultado_binario_hexadecimal");

let binarioDecimal = parseInt(valorBinario, 2);

conv2a8.innerHTML = `${binarioDecimal.toString(8)}`;
conv2a10.innerHTML = `${parseInt(valorBinario, 2)}`;
conv2a16.innerHTML = ` ${(binarioDecimal.toString(16)).toUpperCase()}`;

let valorHexadecimal = input_valor_hexadecimal.value;

let conv16a2 = document.getElementById("resultado_hexadecimal_binario");
let conv16a8 = document.getElementById("resultado_hexadecimal_octal");
let conv16a10 = document.getElementById("resultado_hexadecimal_decimal");

let hexadecimalDecimal = parseInt(valorHexadecimal, 16);

conv16a2.innerHTML = `${hexadecimalDecimal.toString(2)}`;
conv16a10.innerHTML = `${parseInt(valorHexadecimal, 16)}`;
conv16a8.innerHTML = ` ${(hexadecimalDecimal.toString(8)).toUpperCase()}`;

}