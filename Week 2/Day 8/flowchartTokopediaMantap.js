let akun = false;

function bukaTokopedia(){
    console.log("Buka Tokopedia");
    
}
function cekAkun(akun){
    if (akun == true){
        console.log("Akun Ada");
        logIn();
    }
    else { 
        console.log("Akun Belum Ada");
        bikinAkun();
    }
    
}
function bikinAkun(){
    console.log("Akun Terdaftar");
    logIn();
    
}
function logIn(){
    console.log("Berhasil Masuk Mantap");
    
}
function cariBarang(){
    console.log("Barang Ditemukan");

}
function checkOut(){
    console.log("Barang Telah Dimasukkan");

}
function bayarBarang(){
    console.log("Pembayaran Berhasil");
    console.log("Selamat Menunggu Barang");
}

function Utama(akun){
    bukaTokopedia();
    cekAkun(akun);
    cariBarang();
    checkOut();
    bayarBarang();
}
Utama(akun);