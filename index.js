const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from My First Ever node')
});

app.listen(port, () => {
    console.log('listening to port', port)
})