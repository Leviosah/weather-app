var lat = [];
var lon = [];
var paramProp = {   
    'appid': 'b61c90d081a50104207ab5535a41358c',   
}
     
function generateWeatherQuery(city) {

    return `http://api.openweathermap.org/data/2.5/weather?appid=`+paramProp.appid+"&q="+city;
}

function generateForecastQuery(city) {
    
    return `http://api.openweathermap.org/data/2.5/forecast?appid=`+paramProp.appid+"&q="+city;
}

function generateUVindex(lat, lon) {

return `http://api.openweathermap.org/data/2.5/uvi?lat=` + lat + "&lon=" + lon + "&appid=" + paramProp.appid;
} 

function generateUVForecast(lat, lon) {

return `http://api.openweathermap.org/data/2.5/uvi/forecast?lat=` + lat + "&lon=" + lon + "&appid=" + paramProp.appid;
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
            $("#curr-hum").html("humidity: " + data["main"]["humidity"]);
            $("#curr-wind").html("wind: " + data["wind"]["speed"] + "mph");
           // console.log("weather query " + JSON.stringify(data));
           lat = data["coord"]["lat"];
           console.log(lat);
           lon = data["coord"]["lon"];
        $.ajax({
            url: generateForecastQuery(city),
            method: "GET",
            success: function(data) {
                var response = data.list
                console.log("forecast query " + JSON.stringify(response));
                $("#day1-date").html(response[0].dt_txt.slice(0, -8));
                $("#day1-temp").html("°F"+ Math.round((response[0].main.temp - 273.15)*9/5+32));
                $("#day1-icon").attr("src","http://openweathermap.org/img/wn/" + response[0].weather[0].icon + "@2x.png");
                $("#day2-date").html(response[8].dt_txt.slice(0, -8));
                $("#day2-temp").html("°F"+ Math.round((response[8].main.temp - 273.15)*9/5+32));
                $("#day2-icon").attr("src","http://openweathermap.org/img/wn/" + response[8].weather[0].icon + "@2x.png");
                $("#day3-date").html(response[16].dt_txt.slice(0, -8));
                $("#day3-temp").html("°F"+ Math.round((response[16].main.temp - 273.15)*9/5+32));
                $("#day3-icon").attr("src","http://openweathermap.org/img/wn/" + response[16].weather[0].icon + "@2x.png");
                $("#day4-date").html(response[24].dt_txt.slice(0, -8));
                $("#day4-temp").html("°F"+ Math.round((response[24].main.temp - 273.15)*9/5+32));
                $("#day4-icon").attr("src","http://openweathermap.org/img/wn/" + response[24].weather[0].icon + "@2x.png");
                $("#day5-date").html(response[32].dt_txt.slice(0, -8));
                $("#day5-temp").html("°F"+ Math.round((response[32].main.temp - 273.15)*9/5+32));
                $("#day5-icon").attr("src","http://openweathermap.org/img/wn/" + response[32].weather[0].icon + "@2x.png"); 
                }});
            $.ajax({
                url: generateUVindex(lat, lon),
                method: "GET",
                success: function(data) {
                    $("#curr-uv").html("UV Index: " + data["value"]);
                }
            });
                $.ajax({
                    url: generateUVForecast(lat, lon),
                    method: "GET",
                    }).then(function(data) {
                        $("#day1-uv").html("UV Index: " + data[0].value);
                        $("#day2-uv").html("UV Index: " + data[1].value);
                        $("#day3-uv").html("UV Index: " + data[2].value);
                        $("#day4-uv").html("UV Index: " + data[3].value);
                        $("#day5-uv").html("UV Index: " + data[4].value);
            });
        }});
    });

   

