// fs:file system
const fs = require('fs');

const result = fs.readFile('resources/file.txt', (err, data) => {
    if (err) {
        console.log("====" + err);
    } else {
        console.log("====" + data);
    }
});

console.log("result:" + result);


