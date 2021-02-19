
const path = require('path');
const express = require('express');
const hbs = require('hbs')
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');




const app = express();

const port = process.env.PORT || 3000;

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

    geocode(req.query.city, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.city
            })
        })
    })
});

    

app.get('*', (req, res) => {
    res.render('404', {})
});


app.listen(port, () =>{
    console.log('o servidor iniciou');
});
