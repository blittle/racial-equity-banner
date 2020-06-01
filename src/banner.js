import styles from "./styles.js";
import template from "./template.js";

var styleTag;
var bannerTag;
var fontLink;

function start({ layout }) {
  createStyles(layout);
  createBanner(layout);

  setTimeout(function () {
    bannerTag.querySelector(".allies__banner").className = "allies__banner";
  }, 500);
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
  bannerTag
    .querySelector("#dismiss-allies")
    .addEventListener("click", dismissBanner);
}

function dismissBanner() {
  bannerTag.querySelector(".allies__banner").className =
    "allies__banner allies__hidden";
  setTimeout(cleanup, 500);
}

function cleanup() {
  bannerTag.parentElement.removeChild(bannerTag);
  styleTag.parentElement.removeChild(styleTag);
  fontLink.parentElement.removeChild(fontLink);
}

export { start };
