function converter() {

// Conversões de binário para outras bases

let valorBinario = (input_valor_binario.value);

let valor2a8 = parseInt(valorBinario,8);
let valor2a10 = parseInt(valorBinario,10);
let valor2a16 = parseInt(valorBinario,16);

let conv2a8 = document.getElementById("resultado_binario_octal");
let conv2a10 = document.getElementById("resultado_binario_decimal");
let conv2a16 = document.getElementById("resultado_binario_hexadecimal");

conv2a8.innerHTML += ` ${valor2a8}`;
conv2a10.innerHTML += ` ${valor2a10}`;
conv2a16.innerHTML += ` ${valor2a16}`;

// Conversões de octal para outras bases

let valorOctal = (input_valor_octal.value);

let valor8a2 = parseInt(valorOctal,2);
let valor8a10 = parseInt(valorOctal,10);
let valor8a16 = parseInt(valorOctal,16);

let conv8a2 = document.getElementById("resultado_octal_binario");
let conv8a10 = document.getElementById("resultado_octal_decimal");
let conv8a16 = document.getElementById("resultado_octal_hexadecimal");

conv8a2.innerHTML += ` ${valor8a2}`;
conv8a10.innerHTML += ` ${valor8a10}`;
conv8a16.innerHTML += ` ${valor8a16}`;

// Conversões de decimal para outras bases

let valorDecimal = Number(input_valor_decimal.value);

let valor10a2 = valorDecimal.toString(2);
let valor10a8 = valorDecimal.toString(8);
let valor10a16 = valorDecimal.toString(16);

let conv10a2 = document.getElementById("resultado_decimal_binario");
let conv10a8 = document.getElementById("resultado_decimal_octal");
let conv10a16 = document.getElementById("resultado_decimal_hexadecimal");

conv10a2.innerHTML += ` ${valor10a2}`;
conv10a8.innerHTML += ` ${valor10a8}`;
conv10a16.innerHTML += ` ${valor10a16}`;

}

// Conversões de hexadecimal para outras bases

let valorHexadecimal = (input_valor_hexadecimal.value);

let valor16a2 = parseInt(valorHexadecimal,2);
let valor16a8 = parseInt(valorHexadecimal,8);
let valor16a10 = parseInt(valorHexadecimal,10);

let conv16a2 = document.getElementById("resultado_hexadecimal_binario");
let conv16a8 = document.getElementById("resultado_hexadecimal_octal");
let conv16a10 = document.getElementById("resultado_hexadecimal_decimal");

conv16a2.innerHTML += ` ${valor16a2}`;
conv16a8.innerHTML += ` ${valor16a8}`;
conv16a10.innerHTML += ` ${valor16a10}`;

