// girilen 2 adet sayıya istenilen aritmetik işlemi yapan koşul yapısı //
/* *****HESAP MAKİNESİ***** */

let number1 = Number(prompt("ilk sayiyi girin:"));
let number2 = Number(prompt("diger sayiyi girin:"));
let islem = prompt("hangi islemi yapmak istersiniz ? (+ - * /)");

let sonuc = 0;

if (islem == "+") {
 sonuc = number1 + number2
 }
else if (islem == "-") {
 sonuc = number1 -number2
}
else if (islem == "*") {
 sonuc = number1 * number2
}
else if (islem == "/") {
    sonuc = number1 / number2
}
else {
    console.log("hatali bir islem sectiniz");
    console.warn("hatali bir islem sectiniz")
}
console.log(sonuc);