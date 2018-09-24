const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use('/assets',express.static(__dirname+'/assets'))
    app.get('/:id/:name', function(req, res){
        res.send(`
            <html>
                <head>
                    <link rel="stylesheet" href="/assets/style.css">
                </head>
                <body>
                    <h1>${req.params.id || 'home page w/o ids'}</h1>
                    <h2>${req.params.name}</h2>
                </body>
            </html>
        `)
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
