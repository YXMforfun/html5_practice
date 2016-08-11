function handleButtonClick(){
    var textInput = document.getElementById("songTextInput");
    var li = document.createElement("li");
    var songName = textInput.value;
    var ul = document.getElementById("playlist");
    li.innerHTML = songName;
    ul.appendChild(li);
    save(songName);

}

function init() {
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
    loadPlaylist();
}

window.onload = init;

/* getElementById, onclick, createElement, innerHTML,
localStorage.getItem(key), localStorage.setItem(key),
JSON.parse(), JSON.stringify()
*/