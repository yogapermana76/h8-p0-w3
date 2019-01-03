/*
Directions

Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
Example

//input "hello world!"
//output
"!dlrow olleh"

Hints

Untuk membantumu mengerjakan tantangan ini, gunakanlah properti length pada sebuah array yang akan memberikan panjang dari array-nya. Ingat, indeks sebuah array pada JavaScript dimulai dari 0. Untuk tugas ini, kamu wajib menggunakan looping dan dilarang menggunakan sintaks .reverse!
*/

function balikString(input) {
    var reverse = '';

    for(var i = input.length - 1; i >= 0; i--) {
        reverse = reverse + input[i];
    }
    return reverse;
}

console.log(balikString('Hello World!'));