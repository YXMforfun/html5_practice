onmessage = pingpong;
function pingpong(task){
    if (task.data == 'ping'){
        postMessage('pong');
    }
}