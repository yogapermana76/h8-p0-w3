/*
Menggunakan Built-in Function pada Array

Array pada JavaScript memiliki sekumpulan built-in function yang digunakan untuk mempermudah developer untuk mengolah data di dalamnya. Beberapa fungsi yang sering digunakan antara lain join, split, slice, splice, dan sort. Kerjakanlah tantangan ini untuk memperkuat pengertian kamu tentang built-in function tersebut.
Objectives

    Mengerti Kegunaan dari Built-in Function yang dimiliki Array
    Mampu Menggunakan Built-in Function yang dimiliki Array

Directions

//contoh output
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  

    Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.

    Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. Lalu console.log array yang baru seperti di bawah.

["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  

    Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.
        Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
        Format tanggal pada data adalah dd-mm-YYYY
        Misal angka bulan 01, tuliskan "Januari"
        Gunakan switch case untuk menuliskan bulan di atas.

    Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.

    Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.

    Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.

Test-case

Untuk memastikan program kamu sudah bekerja dengan benar, gunakan test-case dibawah.

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {    
    input.splice(1, 1, "Roman Alamsyah Elsharawi");
    input.splice(2, 1, "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);

    var tanggal = input[3].split("/");
    var bulan = tanggal[1];
    switch(bulan) {
        case "01" :
            console.log("Januari"); break;
        case "02" :
            console.log("Februari"); break;
        case "03" :
            console.log("Maret"); break;
        case "04" :
            console.log("April"); break;
        case "05" :
            console.log("Mei"); break;
        case "06" :
            console.log("Juni"); break;
        case "07" :
            console.log("Juli"); break;
        case "08" :
            console.log("Agustus"); break;
        case "09" :
            console.log("September"); break;
        case "10" :
            console.log("Oktober"); break;
        case "11" :
            console.log("November"); break;
        case "12" :
            console.log("Desember"); break;
    }

    console.log(tanggal.sort(function(a, b) { return b - a }));

    console.log(input[3].split("/").join(" - "));

    console.log(input[1].toString().slice(0, 15));
}

dataHandling2(input);
