var rent = document.getElementById("rent");
var area = document.getElementById("area");
var rooms = document.getElementById("rooms");
var utils = document.getElementById("utils");
var form = document.getElementById("dataForRent");
var ROOMS = 0;
var TotalRooms = 0;

form.addEventListener('submit', function(event){
    
    
    if(document.getElementsByClassName("submit-button")[0].value === "Done"){
        location.reload();
        return;
    }
    
    if (!rent.value || !area.value || !rooms.value || !utils.value)
    {
        alert("Please enter the values in the fields.");
    }
    else if(TotalRooms === 0){
        var r = parseFloat(rent.value)
        var a = parseFloat(area.value)
        console.log("Rooms Set!")
        ROOMS = parseFloat(rooms.value)
        TotalRooms = ROOMS;
        var u = parseFloat(utils.value)
        
        console.log(r+a+u);
        event.preventDefault();
    }
    
    var fields = document.getElementsByClassName("field");
    var labels = document.getElementsByClassName("label");
    
    if (ROOMS != 0){
        console.log("here");
        fields[0].style.display = "none";
        fields[1].style.display = "none";
        fields[2].value = "";
        fields[3].value = "";
        
        labels[0].style.display = "none";
        labels[1].style.fontSize = "34px";
        labels[1].innerHTML = "Room #" + ROOMS;
        ROOMS -= 1;
        labels[2].innerHTML = "Number of Roommates";
        labels[3].innerHTML = "Carpet Area";
        event.preventDefault();
    }
    else{
        console.log("there");
        for(var i=0; i<4; i++){
            fields[i].style.display = "none";
            labels[i].style.display = "none";
        }
        labels[0].style.display = "block";
        labels[0].style.fontSize = "28px";
        labels[0].innerHTML = "";
        labels[0].style.whiteSpace = "pre-wrap";
        
        for(var i=1; i<=TotalRooms; i++){
            labels[0].innerHTML += "Room#"+(i)+"\t:\t100\n";
        }
        
        var submitBtn = document.getElementsByClassName("submit-button");
        submitBtn[0].value = "Done";
        event.preventDefault();
    }
    
    
});