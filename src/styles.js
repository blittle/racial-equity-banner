export default function styles(type) {
  const isTop = type === "top" && type !== "fullscreen";
  const isFullScreen = type === "fullscreen";

  return `
.allies__container {
  position: relative;
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: #e1e1e1;
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
  background-color: black;
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
  padding: 16px 0;
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
.allies__dismiss {
  position: absolute;
  ${isFullScreen ? "top: 14px;" : ""}
  right: 14px;
  cursor: pointer;
}`;
}
