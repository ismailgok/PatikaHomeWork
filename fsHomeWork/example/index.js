const fs = require('fs');

// DOSYA OKUMA
// fs.readFile('index/password.txt', 'utf8', (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
//     console.log('DOSYA OKUNDU');
// })


// DOSYA OLUŞTURMA
// fs.writeFile('index/example.json', '{KODLUYORUZ}', 'utf8', (err, data) => {
//     if (err) console.log(err);
//     console.log('dosya başarılı bir şekilde oluşturuldu');
// })

// DOSYAYA VERİ EKLEME
// fs.appendFile('index/example.txt', '\n KODLUYORUZ 222', 'utf8', (err) => {
//     if (err) console.log(err);
//     console.log(' YENİ VERİ EKLENDİ');
// })


// DOSYA SİLMEK
// fs.unlink('index/example.txt', (err) => {
//     if (err) console.log(err);
//     console.log('dosya silindi');
// })

// KLASÖR OLUŞTURMAK
// fs.mkdir('index/img', (err) => {
//     if (err) console.log(err);
//     console.log('klasörler oluşturuldu');
// })

// KLASÖR SİLMEK
// fs.rmdir('index', { recursive: true }(err) => {
//     if (err) console.log(err);
//     console.log('klasörler silindi');
// })