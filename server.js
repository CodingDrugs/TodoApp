const http = require('http');
const app = require('./app');

const PORT = 5002;

let server = http.createServer(app)


server.listen(PORT,(err)=>{
    if(err)console.log(err);
    console.log(`Server is runnnning on port ${PORT}`);

})