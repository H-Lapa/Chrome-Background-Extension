console.log("chrom extensioin is aago");
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(msg, sender, sendResponse) {
    console.log(msg);
    if (msg.command == "blue") {
        console.log("itss blueeee!!");
    }
}