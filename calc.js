class Rent{
    constructor(rooms, rent, area, utils){
        this.rooms = rooms
        this.rent = rent
        this.area = area
        this.utils = utils
        this.roommates = []
        this.areaOfRooms = []
        this.rentPerRoom = []
    }
    
    get commonArea(){
        var result2 = this.area;
        for(var i=0; i<this.rooms; i++){
            result2 -= this.areaOfRooms[i];
        }
        return result2;
    }
    
    get totalRoommates(){
        var result = 0;
        for(var i=0; i<this.rooms; i++){
            result += this.roommates[i];
        } 
        return result;
    }
    
}

var rent = document.getElementById("rent");
var area = document.getElementById("area");
var rooms = document.getElementById("rooms");
var utils = document.getElementById("utils");
var form = document.getElementById("dataForRent");
var ROOMS = 0;
var TotalRooms = 0;
var R;



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
        ROOMS = parseFloat(rooms.value)
        TotalRooms = ROOMS;
        var u = parseFloat(utils.value)
        
        R = new Rent(ROOMS,r,a,u);
        event.preventDefault();
    }
    
    var fields = document.getElementsByClassName("field");
    var labels = document.getElementsByClassName("label");
    
    if (ROOMS < TotalRooms && ROOMS >= 0){
        R.roommates.unshift(parseFloat(fields[2].value));
        R.areaOfRooms.unshift(parseFloat(fields[3].value));
    }
    
    if (ROOMS != 0){
        updateUI(fields, labels);
        event.preventDefault();
    }
    else{
        calcRent();
        removeAllElements(fields,labels);
        
        // Customise first label
        labels[0].style.display = "block";
        labels[0].style.fontSize = "28px";
        labels[0].innerHTML = "";
        labels[0].style.whiteSpace = "pre-wrap";
        
        // Update label with computed data
        for(var i=0; i< TotalRooms; i++){
            labels[0].innerHTML += "Room#"+(i+1)+" : "+R.rentPerRoom[i].toFixed(2)+"\n";
            console.log(R.rentPerRoom[i])
        }
        
        var submitBtn = document.getElementsByClassName("submit-button");
        submitBtn[0].value = "Done";
        event.preventDefault();
    }
    
    
});

function updateUI(fields, labels){
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
}

function removeAllElements(fields, labels){
    for(var i=0; i<4; i++){
        fields[i].style.display = "none";
        labels[i].style.display = "none";
    }
}

function calcRent(){
    
    var rentPerUnit = R.rent/R.area;
    var utilsPerPerson = R.utils/R.totalRoommates;
    var rentForEachRoomate = R.commonArea*rentPerUnit/R.totalRoommates;
    
    for(var i=0; i<R.rooms; i++){
        var roomRent = rentPerUnit*R.areaOfRooms[i];
        var roomRentForEachRoommate = roomRent/R.roommates[i];
        R.rentPerRoom.push(rentForEachRoomate + roomRentForEachRoommate + utilsPerPerson);
    }
}

