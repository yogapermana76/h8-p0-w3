/*
Logic Challenge - Pasangan Angka Terbesar
Problem

Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.
Code

function pasanganTerbesar(num) {
  // you can only write your code here!
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
*/

function pasanganTerbesar(num) {
  // you can only write your code here!
  var arr = String(num)
  var nilaiMax = 0;
  for(var i = 0; i <= arr.length - 1; i++) {
    var sum = arr[i] + arr[i+1];
    if(Number(sum) > nilaiMax) {
      nilaiMax = sum;
    }
  }
    return nilaiMax;        
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99