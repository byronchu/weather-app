const request = require('request');

var geocodeAddress = (address) => {
  let encodedAddress= encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      console.log('Unable to connect to Google Servers')
    } else if (body.status === 'ZERO_RESULTS' ) {
      console.log('Address not found')
    } else if (body.status === 'OK') {
      //  console.log(JSON.stringify(body, undefined, 2));
      console.log(`Address: ${body.results[0].formatted_address}`);
      console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
      console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
  });

};

module.exports = {
  geocodeAddress
}
