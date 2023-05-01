// core module
// ifle

const fs = require('fs');

// menuliskan string ke file secaara asyncrronus

// try {
// fs.writeFileSync('data/test.txt',"halo zulkifli secara syncronus");
// } catch (e){
//     console.log(e)
// }

// menuliskan string ke file ke asynchronus


// fs.writeFile('data/test.txt','halo secara asyncronus' , (err) => {console.log(err)});



// membaca isi file (synchronus)

// const data = fs.readFileSync('data/test.txt', 'utf-8');

// console.log(data)

// membaca isi file asynchronus

// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })




// read line 
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question('masukan nama anda :', (nama) =>{
    rl.question('masukan no hp anda : ', (noHp) => {
       const contact = {
        nama,
        noHp
       };
       const file = fs.readFileSync('data/contacts.json', 'utf-8');
       const contacts = JSON.parse(file);
       contacts.push(contact);

       fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

       console.log(`terimakasih sudah memasukan data`)



        rl.close()
    });
});




