document.querySelector('.button').addEventListener('click', function (){
  console.log('message being sent');
  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {command: "blue"});
    });
});
