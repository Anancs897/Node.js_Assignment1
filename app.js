const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('text.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
        }
        else {
            obj = {
                data:JSON.parse(data)
            }
            //console.log(obj);

            fs.writeFile('data.txt', JSON.stringify(obj), (err) => {
                if (err) {
                    console.error(err);
                }
                else {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(obj));
                }
            })
        }
    })

})



server.listen(8080, () => {
    console.log('success');
});