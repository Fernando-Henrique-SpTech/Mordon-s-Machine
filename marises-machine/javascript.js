function converter() {

// Conversões de binário para outras bases

let valorBinario = (input_valor_binario.value);

let valorBinarioParaOctal = parseInt(valorBinario,8);
let valorBinarioParaDecimal = parseInt(valorBinario,10);
let valorBinarioParaHexadecimal = parseInt(valorBinario,16);

// Conversões de octal para outras bases

let valorOctal = (input_valor_octal.value);

let valorOctalParaBinario = parseInt(valorOctal,2);
let valorOctalParaDecimal = parseInt(valorOctal,10);
let valorOctalParaHexadecimal = parseInt(valorOctal,16);

// Conversões de decimal para outras bases

let valorDecimal = Number(input_valor_decimal.value);

let octal = valorDecimal.toString(8);
let hexadecimal = valorDecimal.toString(16);
let binaria = valorDecimal.toString(2);

let demo1 = document.getElementById("demo1");
let demo2 = document.getElementById("demo2");
let demo3 = document.getElementById("demo3");
let demo4 = document.getElementById("demo4");

demo1.innerHTML = ` ${decimal}`;
demo2.innerHTML = ` ${octal}`;
demo3.innerHTML = ` ${hexadecimal}`;
demo4.innerHTML = ` ${binaria}`;

}

// Conversões de hexadecimal para outras bases

let valorHexadecimal = (input_valor_hexadecimal.value);

let valorHexadecimalParaBinario = parseInt(valorHexadecimal,2);
let valorHexadecimalParaOctal = parseInt(valorHexadecimal,8);
let valorHexadecimalParaDecimal = parseInt(valorHexadecimal,10);

function aparecer_bin() {
    demo4.style.display = 'block'
}

function aparecer_hexa() {
    demo3.style.display = 'block'
}

function aparecer_octal() {
    demo2.style.display = 'block'
}