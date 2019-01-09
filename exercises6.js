/*
Logic Challenge - Number Palindrome
Problem

Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.
Code

function angkaPalindrome(num) {
  // you can only write your code here!
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
*/

function angkaPalindrome(num) {
  // you can only write your code here!
  var check = true;
  while(check) {
    var numString = String(num);
    var reverse = '';

    for(var i = numString.length - 1; i >= 0; i--) {
      reverse += numString[i];
    }
    
    reverse = Number(reverse)

    if(num < 9) {
      num += 1;
    } else if(num == reverse) {
      check = false;
    } else {
      num += 1;
    }
  }
  return num;   
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(1945)); // 1991
console.log(angkaPalindrome(2030)); // 2112