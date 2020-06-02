(function () {
  'use strict';

  function styles(type) {
    var isTop = type === "top" && type !== "fullscreen";
    var isFullScreen = type === "fullscreen";
    return "\n.allies__container {\n  position: relative;\n  font-family: \"Roboto\", sans-serif;\n  text-align: center;\n  color: #e1e1e1;\n}\n.allies__container a {\n  color: #2f80ed;\n  text-decoration: none;\n}\n.allies__container a:hover {\n  text-decoration: underline;\n}\n.allies__banner {\n  position: fixed;\n  background-color: black;\n  ".concat(isFullScreen ? "font-size: 16px; line-height: 24px;" : "font-size: 13px; line-height: 15px;", "\n  z-index: 100000000;\n  ").concat(isTop || isFullScreen ? "top: 0" : "bottom: 0", ";\n  width: 100%;\n  ").concat(isFullScreen ? "height: 100%;" : "", "\n  margin: 0;\n  padding: 16px 0;\n  display: flex;\n  ").concat(isFullScreen ? "flex-direction: column;" : "", "\n  justify-content: center;\n  align-items: center;\n  ").concat(isTop ? "box-shadow: 0 -3px 10px -1px black" : "box-shadow: 0 0px 10px -4px black", ";\n  transition: 300ms linear all;\n}\n.allies__text {\n  display: inline;\n}\n@media only screen and (max-width: 600px) {\n  .allies__text {\n    display: block;\n  ").concat(isFullScreen ? "font-size: 16px; line-height: 24px;" : "", "\n  }\n}\n.allies__hidden {\n  ").concat(isTop ? "top: -100px" : "bottom: -100px", ";\n}\n.allies__dismiss {\n  position: absolute;\n  ").concat(isFullScreen ? "top: 14px;" : "", "\n  right: 14px;\n  cursor: pointer;\n}");
  }

  function template(layout) {
    return "\n<div class=\"allies__banner allies__hidden\">\n  <span>\n    <span class=\"allies__text\"><a href=\"https://blacklivesmatter.com/\" target=\"_blank\">Black Lives Matter</a>. <a href=\"https://www.joincampaignzero.org/\" target=\"_blank\">Support Campaign Zero</a>,</span>\n    <span class=\"allies__text\">the <a href=\"https://support.eji.org/give/153413/#!/donation/checkout\" target=\"_blank\">Equal Justice Initiative</a>, </span>\n    <span class=\"allies__text\">and <a href=\"https://bailfunds.github.io/\" target=\"_blank\">local bail funds</a>.</span>\n  </span>\n\n  <span\n    role=\"button\"\n    class=\"allies__dismiss\"\n    id=\"dismiss-allies\"\n    aria-label=\"dismiss\"\n    tabindex=\"0\"\n  >\n    <svg width=\"15\" height=\"15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path\n        d=\"M13.25 1.75l-11.5 11.5M1.75 1.75l11.5 11.5\"\n        stroke=\"#d1d1d1\"\n        stroke-width=\"2\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\"\n      />\n    </svg>\n  </span>\n</div>\n";
  }

  var styleTag;
  var bannerTag;
  var fontLink;

  function start(_ref) {
    var layout = _ref.layout;
    createStyles(layout);
    createBanner(layout);
    setTimeout(function () {
      bannerTag.querySelector(".allies__banner").className = "allies__banner";
    }, 500);
  }

  function createStyles(layout) {
    fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css2?family=Roboto&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);
    styleTag = document.createElement("style");
    styleTag.setAttribute("type", "text/css");
    styleTag.textContent = styles(layout);
    document.head.appendChild(styleTag);
  }

  function createBanner(layout) {
    bannerTag = document.createElement("div");
    bannerTag.className = "allies__container";
    bannerTag.innerHTML = template();
    document.body.parentElement.appendChild(bannerTag);
    var dismiss = bannerTag.querySelector("#dismiss-allies");
    dismiss.addEventListener("click", dismissBanner.bind(null, layout));
    dismiss.addEventListener("keydown", handleKeyboardClick(dismissBanner));
  }

  function dismissBanner(layout) {
    bannerTag.querySelector(".allies__banner").className = "allies__banner allies__hidden";
    setTimeout(cleanup, layout === 'fullscreen' ? 0 : 500);
  }

  function cleanup() {
    bannerTag.parentElement.removeChild(bannerTag);
    styleTag.parentElement.removeChild(styleTag);
    fontLink.parentElement.removeChild(fontLink);
  }

  function handleKeyboardClick(fn) {
    return function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        return fn(e);
      }
    };
  }

  start({
    layout: 'top'
  });

}());
