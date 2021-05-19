import styles from "./styles.js";
import template from "./template.js";

var styleTag;
var bannerTag;
var fontLink;

function start({ layout }) {
  if (document.readyState === 'loading' || !document.body) {
    window.addEventListener('DOMContentLoaded', mount)
  } else {
    mount()
  }

  function mount() {
    createStyles(layout);
    createBanner(layout);

    setTimeout(function () {
      bannerTag.querySelector(".allies__banner").className = "allies__banner";
    }, 500);
  }
}

function createStyles(layout) {
  fontLink = document.createElement("link");
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=Roboto&display=swap";
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
  const dismiss = bannerTag.querySelector("#dismiss-allies");
  dismiss.addEventListener("click", dismissBanner.bind(null, layout));
  dismiss.addEventListener("keydown", handleKeyboardClick(dismissBanner));
}

function dismissBanner(layout) {
  bannerTag.querySelector(".allies__banner").className =
    "allies__banner allies__hidden";
  setTimeout(cleanup, layout === 'fullscreen' ? 0 : 500);
}

function cleanup() {
  bannerTag.parentElement.removeChild(bannerTag);
  styleTag.parentElement.removeChild(styleTag);
  fontLink.parentElement.removeChild(fontLink);
}

function handleKeyboardClick(fn) {
  return function(e) {
    if(e.key === 'Enter' || e.key === ' ') {
      return fn(e)
    }
  }
}

export { start };
