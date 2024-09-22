const prompt = require('prompt-sync')({sigint: true});
const nilai = prompt('Masukan nilai: ');

let bilangan;
let hasil_akar;


let hasil = function (nilai){
    if(nilai % 2 == 0){
       console.log("Selamat nilai anda bilangan genap");
       bilangan = nilai;
       return bilangan; 
    }else if(nilai % 2 == 1 ){
       console.error("Tidak bisa input bilangan ganjil");
       bilangan = 0;
       return bilangan;
    }else if(nilai < 0){
       console.error("Tidak bisa input bilangan negatif");
       bilangan = 0;
       return bilangan;
    }   
}

let akar = function (bilangan){
    if(bilangan !== 0){
      hasil_akar = Math.sqrt(bilangan);
      console.log("akar dari " + bilangan +" adalah :" + hasil_akar);
    }else{
      console.error("gagal melakukan pengakaran");
    }
}

let cekNilai = hasil(nilai);
console.log(akar(cekNilai));
