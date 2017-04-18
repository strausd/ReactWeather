var axios = require('axios');


// f20842c1794d0580ba0e8b72db56ba7b
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f20842c1794d0580ba0e8b72db56ba7b&units=imperial';


module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if(res.data.cod && res.data.message) {
                // throw new Error(res.data.message);
                throw new Error([res.message, location]);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            // throw new Error(res.data.message);
            throw new Error([res.message, location]);
        });
    }
}
