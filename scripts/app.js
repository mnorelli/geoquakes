// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;
var template;


$(function(){


  $.get(weekly_quakes_endpoint)

   .done(function(data) {
    earthquakes = data;

    var source   = $("#quake-template").html();
    var template = Handlebars.compile(source);
    // var source   = $("#entry-template").html();
    // var template = Handlebars.compile(source);

    for (quake in earthquakes.features) {
      var context = {title: earthquakes.features[quake].properties.title};
      var html    = template(context);
      console.log(earthquakes.features[quake].properties.title)
      $("#quake").append(html);
    }

   })

   .fail(function(error){
    console.log("problem: "+error)
   })






});
