console.log("chrom extensioin is aago");

let color = "red";
let body = document.getElementsByTagName('body');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(msg, sender, sendResponse) {
    console.log(msg);
    if (msg.command == "blue") {
        console.log("itss blueeee!!");
        color = "blue";
    }
}

function backgroundColor (body, color) {
    body[0].style['background-color'] = color;
}

