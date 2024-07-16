// const http = require('http');
// const fs = require('fs');
// const url = require('url');
// const path = require('path');

// const server = http.createServer((req, res) => {
//     console.log('requests beig made');
//     res.setHeader('Content-Type', 'text/html');
//     // res.write('<p>sharing knowledge</p>');
//     // res.end()
//     // fs.readFile('./files/index.html', (err, data) => {
//     //     if(err) {
//     //         console.log(err);
//     //     }
//     //     res.write(data);
//     // }
//     // )
// const pathfile = './files/';
// switch (req.url) {
//     case '/':
//         pathfile += 'index.html';
//         break;
//     // case 'home':
//     //     pathfile += 'index.html';
//     //     break;
//     // case 'about':
//     //     pathfile +='about.html';
//     //     break;
//     // default:
//     //     pathfile +='404.html';
//     //     break;
// }
// fs.readFile(path, (err, data) => {
//         if(err) {
//             console.log(err);
//         }
//         res.write(data);
//     })
// });

// server.listen(5000, 'localhost', () => {
//     console.log("listening for requests on port 4000");
// });

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log('request being made');
    res.setHeader('Content-Type', 'text/html');

    let filePath = './files/';
    switch (req.url) {
        case '/':
            filePath += 'index.html';
            break;
        case '/home':
            filePath += 'index.html';
            break;
        case '/about':
            filePath += 'about.html';
            break;
        default:
            filePath += '404.html';
            break;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
            res.statusCode = 500;
            res.end('Error loading file');
            return;
        }
        res.write(data);
        res.end();
    });
});

server.listen(5000, 'localhost', () => {
    console.log("listening for requests on port 5000");
});
