export default function template(layout) {
  const isFullScreen = layout === 'fullscreen';

  return `
<div class="allies__banner allies__hidden">
  <span>
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
    tabindex="0"
  >
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.25 1.75l-11.5 11.5M1.75 1.75l11.5 11.5"
        stroke="#d1d1d1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </span>
</div>
`;
}
