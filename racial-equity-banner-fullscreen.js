(function () {
  'use strict';

  function styles(type) {
    const isTop = type === "top" && type !== "fullscreen";
    const isFullScreen = type === "fullscreen";

    return `
.allies__container {
  position: relative;
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: black;
}
.allies__container a {
  color: #2f80ed;
  text-decoration: none;
}
.allies__container a:hover {
  text-decoration: underline;
}
.allies__banner {
  position: fixed;
  background-color: #efefef;
  ${
    isFullScreen
      ? "font-size: 16px; line-height: 24px;"
      : "font-size: 13px; line-height: 15px;"
  }
  z-index: 100000000;
  ${isTop || isFullScreen ? "top: 0" : "bottom: 0"};
  width: 100%;
  ${isFullScreen ? "height: 100%;" : ""}
  margin: 0;
  padding: 8px 0;
  display: flex;
  ${isFullScreen ? "flex-direction: column;" : ""}
  justify-content: center;
  align-items: center;
  ${
    isTop
      ? "box-shadow: 0 -3px 10px -1px black"
      : "box-shadow: 0 0px 10px -4px black"
  };
  transition: 300ms linear all;
}
.allies__text {
  display: inline;
}
@media only screen and (max-width: 600px) {
  .allies__text {
    display: block;
  ${isFullScreen ? "font-size: 16px; line-height: 24px;" : ""}
  }
}
.allies__hidden {
  ${isTop ? "top: -100px" : "bottom: -100px"};
}
.allies__icon {
  position: relative;
  ${!isFullScreen ? "margin-right: 8px;" : ""}
  top: 3px;
}
.allies__dismiss {
  position: absolute;
  ${isFullScreen ? "top: 14px;" : ""}
  right: 14px;
  cursor: pointer;
}`;
  }

  function template(layout) {
    const isFullScreen = layout === 'fullscreen';

    return `
    <div class="allies__banner allies__hidden">
  <svg
    class="allies__icon"
    ${isFullScreen ? 'width="200" height="280"': 'width="20" height="28"'}
    viewBox="0 0 20 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <path
        d="M13.3696 12.116C12.9575 11.5302 11.8198 9.94591 11.8198 9.94591C11.8198 9.94591 12.2037 9.45309 12.5024 8.97371C12.8012 8.49433 13.6402 6.88345 13.9246 6.17783C14.2086 5.47221 14.2801 4.46025 14.223 4.00748C14.1659 3.55499 13.2229 1.88185 12.5596 1.01166C11.8956 0.14206 10.7392 0 10 0C9.26053 0 8.10436 0.142059 7.44075 1.01195C6.77744 1.88185 5.83415 3.55499 5.77734 4.00777C5.72053 4.46055 5.79139 5.4725 6.07606 6.17812C6.36073 6.88374 7.19946 8.49492 7.49787 8.974C7.79627 9.45309 8.18021 9.9462 8.18021 9.9462C8.18021 9.9462 7.04276 11.5305 6.63042 12.1163C6.21808 12.7023 4.29872 15.3252 4 15.7513C4 15.7513 5.1234 17.9217 5.25107 19C5.25107 19 8.02351 15.2319 8.35064 14.7528C8.67745 14.2735 9.84705 12.6956 10 12.4661C10.1529 12.6956 11.3222 14.2738 11.6494 14.7528C11.9762 15.2322 14.7489 19 14.7489 19C14.8769 17.9217 16 15.7513 16 15.7513C15.7016 15.3249 13.7819 12.702 13.3696 12.116ZM11.1515 5.77854C11.0095 5.98491 10.1917 7.14681 10 7.36312C9.80803 7.14681 8.99053 5.98491 8.84851 5.77854C8.70648 5.57218 7.82936 4.02121 7.6683 3.6836C7.50723 3.34629 7.36489 2.82277 7.36489 2.82277C7.59713 2.47639 8.41619 2.14434 8.84351 2.05928C9.18937 1.99058 9.8611 1.94382 10 1.94382C10.1389 1.94382 10.8106 1.99029 11.1562 2.05928C11.5835 2.14434 12.4029 2.47639 12.6348 2.82277C12.6348 2.82277 12.4928 3.34658 12.3317 3.6836C12.1703 4.02092 11.2941 5.57218 11.1515 5.77854Z"
        fill="url(#paint0_linear)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="20"
        height="28"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="5" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="10"
        y1="0"
        x2="10"
        y2="19"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="1" stop-color="#010101" stop-opacity="0.51" />
      </linearGradient>
    </defs>
  </svg>

  <span style="${!isFullScreen ? 'margin-right: 32px;' : ''}">
    <span class="allies__text"
      >We stand in support of racial equity and justice,&nbsp;</span
    ><span class="allies__text"
      ><a href="https://blacklivesmatters.carrd.co/" target="_blank"
        >learn how you can help</a
      >.</span
    >
  </span>

  <span
    role="button"
    class="allies__dismiss"
    id="dismiss-allies"
    aria-label="dismiss"
  >
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.25 1.75L1.75 13.25"
        stroke="#515151"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.75 1.75L13.25 13.25"
        stroke="#515151"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </span>
</div>
`;
  }

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

  start({layout: 'fullscreen'});

}());
