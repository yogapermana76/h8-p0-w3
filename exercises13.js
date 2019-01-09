/*
Logic Challenge - Target Terdekat
Problem

Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
Code

function targetTerdekat(arr) {
  // you can only write your code here!
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
*/

function targetTerdekat(arr) {
  // you can only write your code here!
  var positionX = -1;
  var positionO = -1;
  var result = 0;
  var finalResult = 0; 
  for(var i = 0; i < arr.length; i++) {
    //cari posisi x dan o
    if(arr[i] === 'x') {
      positionX = i;
    } else if(arr[i] === 'o') {
      positionO = i;
    }

    //mencari jarak
    if(positionX > -1 && positionO > -1) {
      result = positionX - positionO;
    }
    
    //cek jarak terdekat
    if(result <= finalResult || finalResult === 0) {
      finalResult = result;
    }
  }
  return Math.abs(finalResult)
}

// console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
// console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
// console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
// console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2