var React = require('react');

var WeatherForm = ({location, temp}) => {
    return (
        <div>
            <h3 className="text-center">It is {temp} in {location}</h3>
        </div>
    );
};

module.exports = WeatherForm;
