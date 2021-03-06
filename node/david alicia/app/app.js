const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json()
app.use('/assets',express.static(__dirname+'/assets'))
app.set('view engine','pug')
app.get('/:id/:name', function(req, res){
    res.render('index', {
        params:req.params,
        query:req.query
    })
})

app.get('/api', function(req, res){
    res.send(`
        {
            "name":"ahemed osama",
            "age":28
        }
    `)
})
app.post('/api/person', jsonParser, function(req, res){
    console.log(req.body)
    res.send(JSON.stringify(req.body))
})
app.listen(port);
