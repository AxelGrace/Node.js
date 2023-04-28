
function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}


const PI = 3.14;


const mahasiswa = {
    nama: 'andre',
    umur: 34,

    cetakMhs() {
        return `halo nama saya ${this.nama} saya umur ${this.umur} tahun ,`
    }
};

class Orang {
    constructor() {
        console.log(`objek orang telah di buat`)
    }
}




//   module.exports.cetakNama = cetakNama;
//   module.exports.PI = PI;
//   module.exports.mahasiswa = mahasiswa;
//   module.exports.Orang = Orang;



// module.exports = {
//     cetakNama : cetakNama,
//     PI : PI,
//     mahasiswa : mahasiswa,
//     Orang : Orang,
// }

module.exports = { cetakNama, PI, mahasiswa, Orang };
