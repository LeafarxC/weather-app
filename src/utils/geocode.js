const request = require ('request');

const geocode = (adress, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1IjoicnZjb3N0YSIsImEiOiJja2w4OTUyOGwwYmpzMnJuMHhndDAyenpiIn0.GW0KOwKBPq1-OLWSIIV2eA'
    request({  url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        }else if (body,features.length === 0) {
            callback ('Unable to find location. Try another city', undefined)
        }else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name

            })
        }
    })
    
}

MSFIDOCredentialAssertion.exports = geocode