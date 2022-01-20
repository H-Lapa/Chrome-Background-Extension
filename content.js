console.log("chrom extensioin is aago");

let color = "red";
let body = document.getElementsByTagName('body');

backgroundColor(body, color);

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(msg, sender, sendResponse) {
    console.log(msg);
    if (msg.command == "blue") {
        console.log("itss blueeee!!");
        color = "blue";
        backgroundColor(body, color);
    }
}

function backgroundColor (body, color) {
    body[0].style['background-color'] = color;
}

