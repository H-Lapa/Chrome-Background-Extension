console.log("chrom extensioin is aago");

let color = "none";
let body = document.getElementsByTagName('body');

backgroundColor(body, color);

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(msg, sender, sendResponse) {
    console.log(msg);
    backgroundColor(body, msg.command);
    // if (msg.command == "blue") {
    //     console.log("itss blueeee!!");
    //     color = "blue";
    //     backgroundColor(body, color);
    // }
}

function backgroundColor (body, color) {
    body[0].style['background-color'] = color;
}

