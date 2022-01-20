buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    console.log("message is being sent!");
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {command: buttons[i].id });
      });
  });

}


// document.querySelector('.button').addEventListener('click', function (){
//   console.log('message being sent');
//   chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
//     var activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {command: "blue"});
//     });
// });
