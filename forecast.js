
var paramProp = {   
    'appid': '',    
}
     
function generateQuery(city) 
{
    return `http://api.openweathermap.org/data/2.5/weather?appid=`+paramProp.appid+"&q="+city;
}
        

$("#search-btn").click(function() {
    var city=$("#city-input").val();
    $.ajax({
        url: generateQuery(city),
        method: "GET"
    
    }).then(function(data) {
        $("#location").html(data["name"]);
        $("#cel").html("°C"+Math.round(data["main"]["temp"] - 273.15));
        $("#far").html("°F"+Math.round((data["main"]["temp"] - 273.15)*9/5+32));
    $("#curr-icon").attr("src","http://openweathermap.org/img/wn/"+data["weather"][0]["icon"]+"@2x.png");
    });
});
