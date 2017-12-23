var rent = document.getElementById("rent");
var area = document.getElementById("area");
var rooms = document.getElementById("rooms");
var utils = document.getElementById("utils");
var form = document.getElementById("dataForRent");

form.addEventListener('submit', function(event){
    if (!rent.value || !area.value || !rooms.value || !utils.value)
    {
        alert("Please enter the values in the fields.");
    }
    else{
        var r = parseFloat(rent.value)
        var a = parseFloat(area.value)
        var ro = parseFloat(rooms.value)
        var u = parseFloat(utils.value)
        
        console.log(r+a+ro+u);
        event.preventDefault();
    }
});