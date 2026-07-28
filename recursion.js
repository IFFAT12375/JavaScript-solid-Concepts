const http = require('http');
const os = require('os');

const PORT = process.env.PORT;
console.log(os.userInfo);

const server = http.createServer((req, res) => {


    console.log(req.url);
    console.log(req.method);
    res.write('hello world');

    console.log(res.url);
    console.log(res.method);
})

server.listen(PORT, () => {
    console.log(`server runing on ${PORT}`);
});