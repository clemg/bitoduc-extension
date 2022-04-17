async function sendRes(sendResponse) {
  const res = await fetch('assets/liste_de_traductions.json');
  const json = await res.json();
  sendResponse(json);
}


chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.contentScriptQuery == "getTranslation") {
      sendRes(sendResponse)
      return true
    }
  }
)
