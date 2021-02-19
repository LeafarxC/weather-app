
const path = require('path');
const express = require('express');
const hbs = require('hbs')
const { response } = require('express');



const app = express();

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')



app.use(express.static(publicPath));

app.set('view engine', 'hbs'); 
app.set('views', viewsPath);

hbs.registerPartials(partialsPath);

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather App',
        nome: 'Rafael'   
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'weather App | About',
        heading1: 'Sobre a nossa aplicação' ,
        nome: 'Rafael'    
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'weather App | Help',
        heading1: 'Como utilizar a nossa APP'   
    });
});


app.get('/weather', (req, res) => {
    if(req.query.city){
        res.send({
            error: "localizaçao difinida"
        });
    }

    res.send({
        forecast: "sol",
        location: "Porto",
        address: req.query.city

    })
});

app.get('*', (req, res) => {
    res.render('404', {})
});


app.listen(3000, () =>{
    console.log('o servidor iniciou');
});
