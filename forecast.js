
var paramProp = {   
    'appid': 'b61c90d081a50104207ab5535a41358c',   
}
     
function generateWeatherQuery(city) {

    return `http://api.openweathermap.org/data/2.5/weather?appid=`+paramProp.appid+"&q="+city;
}

function generateForecastQuery(city) {
    
    return `http://api.openweathermap.org/data/2.5/forecast?appid=`+paramProp.appid+"&q="+city;
}

$("#search-btn").click(function() {
    var city=$("#city-input").val();
    $.ajax({
        url: generateWeatherQuery(city),
        method: "GET",
        success: function(data) {
            $("#location").html(data["name"]);
            $("#curr-temp").html("°F"+Math.round((data["main"]["temp"] - 273.15)*9/5+32));
            $("#cel").html("°C"+Math.round(data["main"]["temp"] - 273.15));
            $("#far").html("°F"+Math.round((data["main"]["temp"] - 273.15)*9/5+32));
            $("#curr-icon").attr("src","http://openweathermap.org/img/wn/"+data["weather"][0]["icon"]+"@2x.png");
           // console.log("weather query " + JSON.stringify(data));
        $.ajax({
            url: generateForecastQuery(city),
            method: "GET",
        }).then(function(data) {

            var response = data.list
            $("#day1-date").html(response[0].dt_txt);
            $("#day1-temp").html("°F"+((response[0].main.temp - 273.15)*9/5+32));
            $("#day1-icon").attr("src","http://openweathermap.org/img/wn/" + response[0].weather[0].icon + "@2x.png");
            $("#day2-date")
            $("#day2-temp")
            $("#day2-icon")
            $("#day3-date")
            $("#day3-temp")
            $("#day3-icon")
            $("#day4-date")
            $("#day4-temp")
            $("#day4-icon")
            $("#day5-date")
            $("#day5-temp")
            $("#day5-icon") 

            console.log("forecast query " + JSON.stringify(response[0]));
        });
    }});
});
   

