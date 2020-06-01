(function () {
  'use strict';

  function styles(type) {
    var isTop = type === "top" && type !== "fullscreen";
    var isFullScreen = type === "fullscreen";
    return "\n.allies__container {\n  position: relative;\n  font-family: \"Roboto\", sans-serif;\n  text-align: center;\n  color: black;\n}\n.allies__container a {\n  color: #2f80ed;\n  text-decoration: none;\n}\n.allies__container a:hover {\n  text-decoration: underline;\n}\n.allies__banner {\n  position: fixed;\n  background-color: #efefef;\n  ".concat(isFullScreen ? "font-size: 16px; line-height: 24px;" : "font-size: 13px; line-height: 15px;", "\n  z-index: 100000000;\n  ").concat(isTop || isFullScreen ? "top: 0" : "bottom: 0", ";\n  width: 100%;\n  ").concat(isFullScreen ? "height: 100%;" : "", "\n  margin: 0;\n  padding: 8px 0;\n  display: flex;\n  ").concat(isFullScreen ? "flex-direction: column;" : "", "\n  justify-content: center;\n  align-items: center;\n  ").concat(isTop ? "box-shadow: 0 -3px 10px -1px black" : "box-shadow: 0 0px 10px -4px black", ";\n  transition: 300ms linear all;\n}\n.allies__text {\n  display: inline;\n}\n@media only screen and (max-width: 600px) {\n  .allies__text {\n    display: block;\n  ").concat(isFullScreen ? "font-size: 16px; line-height: 24px;" : "", "\n  }\n}\n.allies__hidden {\n  ").concat(isTop ? "top: -100px" : "bottom: -100px", ";\n}\n.allies__icon {\n  position: relative;\n  ").concat(!isFullScreen ? "margin-right: 8px;" : "", "\n  top: 3px;\n}\n.allies__dismiss {\n  position: absolute;\n  ").concat(isFullScreen ? "top: 14px;" : "", "\n  right: 14px;\n  cursor: pointer;\n}");
  }

  function template(layout) {
    var isFullScreen = layout === 'fullscreen';
    return "\n    <div class=\"allies__banner allies__hidden\">\n  <svg\n    class=\"allies__icon\"\n    ".concat(isFullScreen ? 'width="200" height="280"' : 'width="20" height="28"', "\n    viewBox=\"0 0 20 28\"\n    fill=\"none\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <g filter=\"url(#filter0_d)\">\n      <path\n        d=\"M13.37 12.116c-.412-.586-1.55-2.17-1.55-2.17s.384-.493.682-.972c.3-.48 1.138-2.09 1.423-2.796.284-.706.355-1.718.298-2.17-.057-.453-1-2.126-1.663-2.996C11.896.142 10.74 0 10 0S8.104.142 7.44 1.012c-.663.87-1.606 2.543-1.663 2.996-.056.453.014 1.465.3 2.17.284.706 1.122 2.317 1.42 2.796.3.48.683.972.683.972s-1.137 1.585-1.55 2.17c-.412.586-2.331 3.21-2.63 3.635 0 0 1.123 2.17 1.251 3.249 0 0 2.773-3.768 3.1-4.247.326-.48 1.496-2.057 1.649-2.287.153.23 1.322 1.808 1.65 2.287.326.48 3.099 4.247 3.099 4.247.128-1.078 1.251-3.249 1.251-3.249-.298-.426-2.218-3.049-2.63-3.635zm-2.218-6.337c-.143.206-.96 1.368-1.152 1.584-.192-.216-1.01-1.378-1.151-1.584-.143-.207-1.02-1.758-1.18-2.095a6.338 6.338 0 01-.304-.861c.232-.347 1.051-.679 1.479-.764A9.252 9.252 0 0110 1.944c.139 0 .81.046 1.156.115.428.085 1.247.417 1.479.764 0 0-.142.524-.303.86-.162.338-1.038 1.89-1.18 2.096z\"\n        fill=\"url(#paint0_linear)\"\n      />\n    </g>\n    <defs>\n      <linearGradient\n        id=\"paint0_linear\"\n        x1=\"10\"\n        y1=\"0\"\n        x2=\"10\"\n        y2=\"19\"\n        gradientUnits=\"userSpaceOnUse\"\n      >\n        <stop />\n        <stop offset=\"1\" stop-color=\"#010101\" stop-opacity=\".51\" />\n      </linearGradient>\n      <filter\n        id=\"filter0_d\"\n        x=\"0\"\n        y=\"0\"\n        width=\"20\"\n        height=\"28\"\n        filterUnits=\"userSpaceOnUse\"\n        color-interpolation-filters=\"sRGB\"\n      >\n        <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n        <feColorMatrix\n          in=\"SourceAlpha\"\n          values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"\n        />\n        <feOffset dy=\"5\" />\n        <feGaussianBlur stdDeviation=\"2\" />\n        <feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0\" />\n        <feBlend in2=\"BackgroundImageFix\" result=\"effect1_dropShadow\" />\n        <feBlend in=\"SourceGraphic\" in2=\"effect1_dropShadow\" result=\"shape\" />\n      </filter>\n    </defs>\n  </svg>\n\n  <span style=\"").concat(!isFullScreen ? 'margin-right: 32px;' : '', "\">\n    <span class=\"allies__text\"\n      >We stand in support of racial equity and justice,&nbsp;</span\n    ><span class=\"allies__text\"\n      ><a href=\"https://blacklivesmatters.carrd.co/\" target=\"_blank\"\n        >learn how you can help</a\n      >.</span\n    >\n  </span>\n\n  <span\n    role=\"button\"\n    class=\"allies__dismiss\"\n    id=\"dismiss-allies\"\n    aria-label=\"dismiss\"\n    tabindex=\"0\"\n  >\n    <svg width=\"15\" height=\"15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path\n        d=\"M13.25 1.75l-11.5 11.5M1.75 1.75l11.5 11.5\"\n        stroke=\"#515151\"\n        stroke-width=\"2\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\"\n      />\n    </svg>\n  </span>\n</div>\n");
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
    bannerTag.innerHTML = template(layout);
    document.body.parentElement.appendChild(bannerTag);
    var dismiss = bannerTag.querySelector("#dismiss-allies");
    dismiss.addEventListener("click", dismissBanner);
    dismiss.addEventListener("keydown", handleKeyboardClick(dismissBanner));
  }

  function dismissBanner() {
    bannerTag.querySelector(".allies__banner").className = "allies__banner allies__hidden";
    setTimeout(cleanup, 500);
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
    layout: 'bottom'
  });

}());
