const http = require('http')


const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
    res.setHeader("Access-Control-Allow-Headers", "content-type")
    res.end(JSON.stringify({name: '张三', age: 18}))
})


server.listen(3000, () => {
    console.log('server is running at http://loaclhost:3000')
})