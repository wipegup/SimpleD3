// ajax (using jquery) to load data
function getData(drawFunction){
               $.ajax({
                 type: 'GET',
                 contentType: 'application/json; charset=utf-8',
                 url: '/clicks',
                 dataType: 'json',
                 success: function(data){
                   drawFunction(data);
                 },
                 failure: function(result){
                   error();
                 }
               });
             };

// Error function for ajax failure
function error() {
   console.log("Error in Loading Data!");
}

function drawCircle(data){
  d3.select('#circle')    // select element with id = 'circle'
  .append('circle')     // create a circle element at that selector
  .data(data)
  .attr("cx", 50)       // define the x-location of the circle center
  .attr("cy", 50)       // define the y-location of the circle center
  .attr("r", function(d){return d});  // define the radius of the circle
}

function redrawCircle(data){
  d3.select('#circle')    // select element with id = 'circle'
    .select("circle")     // select the 'circle' element
    .data(data)
    .transition()         // specify a transition should occur
    .attr("r", function(d){return d});  // specify which attributes should change
}

// load data upon page load
$(function(){
  getData(drawCircle);
});
