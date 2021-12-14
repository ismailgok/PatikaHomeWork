const fs = require('fs');


function createFile(data) {
    fs.writeFile('employees.json', '{name:"Employee 1 Name",salary:"2000"}', 'utf8', (err) => {
        if (err) console.log(err);
        let a = 'dosya oluşturuldu'
        this.data = a;
        console.log(this.data);
    })

    fs.readFile('employees.json', 'utf8', (err, data) => {
        if (err) console.log(err);
        this.data = data;
        console.log(this.data);
    })

    fs.appendFile('employees.json', 'YENİ VERİ EKLENDİ', 'utf8', (err) => {
        if (err) console.log(err);
        a = 'yeni veri eklendi'
        this.data = a
        console.log(this.data);
    })

    fs.unlink('employees.json', (err) => {
        if (err) console.log(err);
        console.log('başarıyla silindi');
    })


}
createFile()