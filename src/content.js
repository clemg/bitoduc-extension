chrome.runtime.sendMessage({
  contentScriptQuery: 'getTranslation'
}, function (response) {
  for (translation of response) {
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    const reg = new RegExp(translation.anglais, 'gi')

    while (node = walk.nextNode()) {
      if (node.nodeValue.match(reg)) {
        node.nodeValue = node.nodeValue.replace(reg, translation.français.toLowerCase())
      }
    }

    document.title = document.title.replace(reg, translation.français.toLowerCase());
  }
})
