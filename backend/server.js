const port = 8080;
const express = require('express');
const app = express();
const http = require('http').Server(app);
const router = require('./router.js');
const cors = require('cors');

app.use(cors({
    origin:'*'
}))
router(app);


app.listen(port, (err) => {
    if (err) {
        console.log('somthing is not working');
    } else {
        console.log('server is listening on port', port);
    }
})

