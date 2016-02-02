$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.
    // console.log(data.timezone);

// used http://www.timestampgenerator.com to determine that data.daily.data[0] was actually today, so [1] is the info for tomorrow

    var markup = "The current temperature for " + data.timezone + " is " + data.currently.apparentTemperature + "&degF " + " with " +
    data.currently.summary + " skies." + " Tomorrow the temperature will reach " + data.daily.data[1].apparentTemperatureMax + "&degF "
    + "with " + data.daily.data[1].summary + " The following day the temperature will be between " + data.daily.data[2].apparentTemperatureMin
    + "&degF " + " and " + data.daily.data[2].apparentTemperatureMax + "&degF " + "with " + data.daily.data[2].summary +
    "The temperature three days from now will max out at " + data.daily.data[2].apparentTemperatureMax + "&degF " + "and the forecast is "
    + data.daily.data[3].summary


    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
