console.log('I am updated');

// Listen for messages
const { ipcRenderer } = require('electron');
ipcRenderer.on('message', function (event, text) {
    console.log('Message from updater:', text);
    document.getElementById('logger').innerHTML += text
});
