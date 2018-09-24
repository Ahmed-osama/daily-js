const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use('/assets',express.static(__dirname+'/assets'))
app.set('view engine','pug')
app.get('/:id/:name', function(req, res){
    res.render('index', req.params)
})
app.get('/api', function(req, res){
    res.send(`
        {
            "name":"ahemed osama",
            "age":28
        }
    `)
})
app.listen(port);
