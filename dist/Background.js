/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/Background.ts ***!
  \***************************/
console.log("👨🏿‍🔬 Backdround Service Worker id : 1");
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  console.log({
    ReceivedBy: "Background",
    SendedFrom: msg.from,
    validReceiver: msg.to === "Background"
  });
  sendResponse("ok");
});
/******/ })()
;
//# sourceMappingURL=Background.js.map