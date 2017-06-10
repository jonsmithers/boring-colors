onIsGrayscaleEnabledToggle();

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace !== "local") {
    throw new Error("unimplemented scenario");
  }
  if (typeof changes.isGrayscaleEnabled !== 'undefined') {
    onIsGrayscaleEnabledToggle();
  }
});

function onIsGrayscaleEnabledToggle(isEnabled) {
  chrome.storage.local.get('isGrayscaleEnabled', keyValueMap => {
    var isEnabled = keyValueMap.isGrayscaleEnabled;
    if (isEnabled) {
      document.body.setAttribute("enable-boring-colors", "");
    } else {
      document.body.removeAttribute("enable-boring-colors");
    }
  });
}
