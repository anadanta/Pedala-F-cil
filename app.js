
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -1.455833, lng: -48.503887}, 
        zoom: 15
    });
}
