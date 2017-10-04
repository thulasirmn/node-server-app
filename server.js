const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');  
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
    next();
});

hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text)=>{
    return text.toUppercase();
})

app.get('/',(req, res)=>{

    res.render('home.hbs',{
        Title : 'This is Home page',
        Content : 'This is Content',
        
    });

});

app.get('/about',(req, res)=>{
    res.render('about.hbs',{
        Title : 'This is about page',
        Content : 'This is Content',
    });
});


app.get('/bad', (req, res)=>{
    res.send({
        erroMesage : 'Unable to process the request',
        message : [
            'This is bad request'
        ]
    });

});

app.listen(port);