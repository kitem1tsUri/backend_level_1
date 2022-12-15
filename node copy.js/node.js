const http = require('http'); 
const port = 8000; 

const server = http.createServer((request , response) => {
    response.statusCode = 200; 
    response.setHeader("Content-Type", "text/plan"); 
    response.end("hello World\m")

})
server.listen(port, () => {
    console.log('server started')
})