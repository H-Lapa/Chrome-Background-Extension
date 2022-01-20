console.log("chrom extensioin is aago");

let color = "red";

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(msg, sender, sendResponse) {
    console.log(msg);
    if (msg.command == "blue") {
        console.log("itss blueeee!!");
        color = "blue";
    }
}


let body = document.getElementsByTagName('body');
body[0].style['background-color'] = color;
