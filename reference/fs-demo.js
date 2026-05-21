const fs = require('fs');
const path = require('path');

fs.rename(
    path.join(__dirname, 'test', 'hello.txt'),
    path.join(__dirname, 'test', 'hello world.txt'),
    err => {
        if (err) throw err;

        console.log('File renamed...');
    }
);