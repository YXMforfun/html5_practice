window.onload = function(){
   var button = document.getElementById("previewButton");
   button.onclick = previewHandler;
}

//  control
function previewHandler(){
   var canvas = document.getElementById("tshirtCanvas");
   var context = canvas.getContext("2d");
   fillBackgroundColor(canvas, context);
   drawSmileyFace();
   drawText(canvas, context);

   var selectObj = document.getElementById("shape");
   var index = selectObj.selectedIndex;
   var shape = selectObj[index].value;
   if(shape == "squares"){
        for(var squares = 0; squares < 20; squares++){
            drawSquare(canvas, context);
        }
   } else if( shape== "circles"){
        for(var circles = 0; circles < 20; circles++){
            drawCircle(canvas, context);
        }
   }
   drawText(canvas, context);
   drawBird(canvas, context);
}
//  square
function drawSquare(canvas, context){
    var w = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    context.fillStyle = 'lightblue';
    context.fillRect(x, y, w, w);
}
// circle
function drawCircle(canvas, context) {
    var radius = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);

    context.beginPath();
    context.arc(x, y, radius, 0, degreesToRadians(360), true);

    context.fillStyle = "lightblue";
    context.fill();
}
//  canvas background
function fillBackgroundColor(canvas, context){
    var selectObj = document.getElementById("backgroundColor");
    var index = selectObj.selectedIndex;
    var bgColor = selectObj.options[index].value;
    context.fillStyle = bgColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function degreesToRadians(degrees) {
    var radians = (degrees * Math.PI) / 180;
    return radians;
}
//  smile
function drawSmileyFace(){
    var canvas = document.getElementById("smiley");
    var context = canvas.getContext("2d");

    context.beginPath();
    context.arc(300, 300, 200, 0, degreesToRadians(360), true);
    context.fillStyle = "#ffffcc";
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(200, 250, 25, 0, degreesToRadians(360), true);
    context.stroke();

    context.beginPath();
    context.arc(400, 250, 25, 0, degreesToRadians(360), true);
    context.stroke();

    context.beginPath();
    context.moveTo(300, 300);
    context.lineTo(300, 350);
    context.closePath();

    context.beginPath();
    context.arc(300, 350, 75, degreesToRadians(20), degreesToRadians(160), false);
    context.stroke();
}
// draw text
function drawText(canvas, context){
    var selectObj = document.getElementById("foregroundColor");
    var index = selectObj.selectedIndex;
    var fgColor = selectObj[index].value;
    context.fillStyle = fgColor;
    context.font = "bold 1em sans-serif";
    context.textAlign = "left";
    context.fillText("I saw this tweet", 20, 40);
    // draw tweets
    selectObj = document.getElementById("tweets");
    index = selectObj.selectedIndex;
    var tweet = selectObj[index].value;
    context.font = "italic 1.2em serif";
    context.fillText(tweet, 30, 100);

    context.font = "bold 1em sans-serif";
	context.textAlign = "right";
	context.fillText("and all I got was this lousy t-shirt!",
		canvas.width-20, canvas.height-40);
}

function drawBird(canvas, context){
    var twitterBird = new Image();
    twitterBird.src = "https://raw.githubusercontent.com/bethrobson/Head-First-HTML5/master/chapter7/twitterBird.png";
    twitterBird.onload = function(){
        context.drawImage(twitterBird, 20, 120, 70, 70);
    };
}

// ============================================
function updateTweets(tweets){
    var tweetsSelection = document.getElementById("tweets");
    for (var i=0; i < tweets.length; i++){
        tweet = tweets[i];
        var option = document.createElement("option");
        option.text = tweet.text;
        option.value = tweet.text.replace("\"", "'");
        tweetsSelection.options.add(option);
    }
    tweetsSelection.selectedIndex = 0;

}