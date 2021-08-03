const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res) => {
    res.send('funcionando...');
})

const routes = require('./routes');
app.use('/api', routes);

//junção do backend com o frontend:
app.use(express.static(__dirname + '/client'));

const port = 3001;

app.listen(port, (req, res) => {
    console.log('server runing on https:localhost',port);
})
