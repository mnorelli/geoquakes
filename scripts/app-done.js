// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;
var template;

$(document).on("ready", function() {

    initMap();

    $quakesList = $.ajax({
        method: "GET",
        url: weekly_quakes_endpoint
    }).done(function(data){

       var earthquakes = data.features;

        var source = $("#quakes-template").html();
        template = Handlebars.compile(source);

        var quakesTemplate = template({quakes: earthquakes});
       
        $("#info").append(quakesTemplate);


        earthquakes.forEach(function(quake){
            var tempLat = quake.geometry.coordinates[1];
            var tempLng = quake.geometry.coordinates[0];
            new google.maps.Marker({
                position: new google.maps.LatLng(tempLat, tempLng),
                map: map,
                title: quake.properties.title
            });
            
        })

    }).fail(function(response){
        console.log("Error: ", response);
    });
});

    
    function initMap() {
        var pos = {lat: 37.78, lng: -122.44};

        map = new google.maps.Map(document.getElementById('map'), {
          center: pos,
          zoom: 2
        });

        // var marker = new google.maps.Marker({
        //     position: pos,
        //     map: map,
        //     title: "San Francisco"
        // })
      }





