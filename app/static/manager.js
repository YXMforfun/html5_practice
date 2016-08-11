window.onload =  function() {
    var worker = new Worker("static/response.js");
    worker.postMessage("ping");

    worker.onmessage = function(event) {
        var message = "Worker says " + event.data;
        document.getElementById("output").innerHTML = message;
    }
}