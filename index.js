let ks = require("node-key-sender")
const express = require("express")


app = express()
app.use(express.static('./src'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
})

app.get('/start', (req, res) => {
    ks.sendKey('space');
    console.log("start/stop")
    res.sendStatus(200);

})

app.get('/fullscreen', (req, res) => {
    ks.sendKey('f');
    console.log("fullscreen")
    res.sendStatus(200);

})

app.get('/mute', (req, res) => {
    ks.sendKey('m');
    console.log("mute")
    res.sendStatus(200);

})

app.get('/plus10', (req, res) => {
    ks.sendKey('right');
    console.log("plus10")
    res.sendStatus(200);

})

app.get('/minus10', (req, res) => {
    ks.sendKey('left');
    console.log("minus10")
    res.sendStatus(200);

})

app.get('/volumeup', (req, res) => {
    ks.sendKey('up');
    console.log("volume up")
    res.sendStatus(200);

})

app.get('/volumedown', (req, res) => {
    ks.sendKey('down');
    console.log("volume down")
    res.sendStatus(200);

})

app.get('/skip', (req, res) => {
    ks.sendKey('s');
    console.log("skip")
    res.sendStatus(200);

})



app.listen(4567, '0.0.0.0', () => { console.log('listening...')})