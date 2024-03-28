function converter() {

// Conversões de binário para outras bases

let valorBinario = (input_valor_binario.value);

let valor2a8 = parseInt(valorBinario,8);
let valor2a10 = parseInt(valorBinario,10);
let valor2a16 = parseInt(valorBinario,16);

let conv2a8 = document.getElementById("div_binario_octal");
let conv2a10 = document.getElementById("div_binario_decimal");
let conv2a16 = document.getElementById("div_binario_hexadecimal");

div_binario_octal.innerHTML += ` ${conv2a8}`;
div_binario_decimal.innerHTML += ` ${conv2a10}`;
div_binario_hexadecimal.innerHTML += ` ${conv2a16}`;

// Conversões de octal para outras bases

let valorOctal = (input_valor_octal.value);

let valor8a2 = parseInt(valorOctal,2);
let valor8a10 = parseInt(valorOctal,10);
let valor8a16 = parseInt(valorOctal,16);

let conv8a2 = document.getElementById("div_octal_binario");
let conv8a10 = document.getElementById("div_octal_decimal");
let conv8a16 = document.getElementById("div_octal_hexadecimal");

div_octal_binario.innerHTML += ` ${conv8a2}`;
div_octal_decimal.innerHTML += ` ${conv8a10}`;
div_octal_hexadecimal.innerHTML += ` ${conv8a16}`;

// Conversões de decimal para outras bases

let valorDecimal = Number(input_valor_decimal.value);

let valor10a2 = valorDecimal.toString(2);
let valor10a8 = valorDecimal.toString(8);
let valor10a16 = valorDecimal.toString(16);

let conv10a2 = document.getElementById("div_decimal_binario");
let conv10a8 = document.getElementById("div_decimal_octal");
let conv10a16 = document.getElementById("div_decimal_hexadecimal");

div_decimal_binario.innerHTML += ` ${conv10a2}`;
div_decimal_octal.innerHTML += ` ${conv10a8}`;
div_decimal_hexadecimal.innerHTML += ` ${conv2a16}`;

}

// Conversões de hexadecimal para outras bases

let valorHexadecimal = (input_valor_hexadecimal.value);

let valor16a2 = parseInt(valorHexadecimal,2);
let valor16a8 = parseInt(valorHexadecimal,8);
let valor16a10 = parseInt(valorHexadecimal,10);

let conv16a2 = document.getElementById("div_hexadecimal_binario");
let conv16a8 = document.getElementById("div_hexadecimal_octal");
let conv16a10 = document.getElementById("div_hexadecimal_decimal");

div_hexadecimal_binario.innerHTML += ` ${conv10a2}`;
div_hexadecimal_octal.innerHTML += ` ${conv10a8}`;
div_hexadecimal_decimal.innerHTML += ` ${conv2a16}`;

