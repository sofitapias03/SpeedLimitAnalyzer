function submitData() {
    var pointALon = document.getElementById('pointALON').value
    var pointALat = document.getElementById('pointALAT').value
    var pointBLon = document.getElementById('pointBLON').value
    var pointBLat = document.getElementById('pointBLAT').value
    var streetName = document.getElementById('streetName').value


    // PREPARE json to send
    // parseFloat() is a javascript fuction that is used to convert a string into a floating point number
    // This is a javascrypt object, containing three values two arrays and one string 
    // An object is a user-defined datatype
    const data = {
        pointA:[parseFloat(pointALat), parseFloat(pointALon)],
        pointB:[parseFloat(pointBLat), parseFloat(pointBLon)],
        street:streetName
    };

    // fetch() is a built in javascrypt function that lets the browser talk to the server
    // "http://127.0.0.1:5000/get-route-images" is the API endpoint we're calling
    // the fetch("ENDPOINT", {...}) is called the options obkect, it tells fetch how to send the request 
    // Inside the options object the method:"POST" tells the server we are sending data not only receiving 
    // headers:{...} this is telling the server that the data we are sending is in json format, this is important so the server knows how to read the data
    fetch("http://127.0.0.1:5000/get-route-images", {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        // the body, is the actual data we're sending to the request, stringify, converts out javascryct object into a string
        body: JSON.stringify(data)
    })
    // .then is called after the fetch() is called usccesfully, response is wha tthe server sent back 
    //response.json() converts response from json inot a javascrypt object
    // this returns a promise which allows the chaining of the .then()
    .then(response => response.json())
    // this receives parsed JSON from teh server
    // data is now a javascrypt object you can use in the frontend
    .then(data => {
        console.log("Backend response: ", data);
    })
    //runs in case anything goes wrong
    .catch(error => console.error("Error",error));

    clear()
}

function clear(){
    document.getElementById('pointALAT').value = ''
    document.getElementById('pointALON').value = ''
    document.getElementById('pointBLAT').value = ''
    document.getElementById('pointBLON').value = ''
    document.getElementById('streetName').value = ''
}