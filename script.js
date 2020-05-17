






// $.ajax({
//   url: queryURL, 
//   method: "GET"
// }) .then(function(response){

//   console.log(response)



// })

// steps to figuring out the openweathermap homework

// create an onclick for get forecast button
$("#weather").on("click", function(event){
  var city = $("#txt").val().trim()
  weather(city)
  console.log(event.target)
  console.log("hello")
  console.log(city)
 
  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }) .then(function(response){
  //   console.log(response)

  // })
})
function weather(city) {
  
  
  var queryURL ="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=3cf22d3a1b9ec6b9450acf8a65f91770"
  $.ajax({
    url:queryURL,
    method:"GET"
  }) .then(function(response){
    var newP = $("<p>").text(response.main.temp)
    $("#forecast").append(newP)
    console.log(response)
    var latitude = response.coord.lat
    console.log(latitude)
    var longitude = response.coord.lon
   var UV= getUVIndex(longitude, latitude)
   console.log(UV+"index")
  })
 
}
function getUVIndex(lon, lat) {
  console.log(lon)
  var queryURL2 =  "http://api.openweathermap.org/data/2.5/uvi?appid=7ba67ac190f85fdba2e2dc6b9d32e93c&lat= "+lat + "&lon=" + lon
  $.ajax({
    url:queryURL2,
    method:"GET",
    dataType: "json"
 }) .then(function(response){
   return response
 }) 
 
}


// kept getting 401 error in api i have been trying to figure it out for days with no luck so this will have to be handed in as is i apologize



  

// retrieve value of form input inside of onclick function



// send data from input field to the openweather api using ajax

// var queryURL1 =  "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=3cf22d3a1b9ec6b9450acf8a65f91770"

// for use of query endpoint





