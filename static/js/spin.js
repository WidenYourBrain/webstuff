body = document.querySelector("body");

// this is on apples homepage
const bluebutton = document.querySelector(
  "a.button.button-elevated.button-primary",
);

// this is on teslas homepage
const teslalogo = document.querySelector("a.tds-site-logo-link");

const style = document.createElement("style");
style.textContent = `
@keyframes colorwheel {
  0% {
    filter: hue-rotate(0deg) contrast(90%) saturate(100%);
  }
  50% {
    filter: hue-rotate(1080deg) contrast(260%) saturate(300%);
  }
  100% {
    filter: hue-rotate(0deg) contrast(90%) saturate(100%);
  }
}
.colorclass {
  animation: colorwheel 10s ease;
}

.simplehuechange {
  filter: hue-rotate(180deg);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg) scale(0.5);
  }
  100% {
    transform: rotate(720deg);
  }
}
.spinclass {
  animation: spin 10s ease;
}

.modifiedtext {
  color: rgb(0, 57, 148);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 100px;
  text-decoration: underline;
}

.modifiedtext:hover {
  color: red;
  font-weight: bold;
}

body.darkmode {
  filter: invert(1) hue-rotate(180deg);
}

body {
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  gap: 10px;
}

.square {
  height: 300px;
  width: 300px;
}/*# sourceMappingURL=main.css.map */
`;
document.head.appendChild(style);

fetch(
  "https://raw.githubusercontent.com/WidenYourBrain/webstuff/main/static/css/style.css",
)
  .then((response) => response.text())
  .then((cssText) => {
    const style = document.createElement("style");
    style.textContent = cssText;
    document.head.appendChild(style);
  })
  .catch((err) => console.error("Failed to load CSS:", err));

// this function works on any website
function spinbody() {
  body.classList.add("spinclass");
  setTimeout(() => {
    body.classList.remove("spinclass");
  }, 10000); // 10 seconds
}

// this function takes an argument "el" and applies the spin animation to whatever element
// the element should already be queried and declared in javascript

villasonriotext = document.querySelector("div.et_pb_text_inner > h1");
function spinEl(el) {
  el.classList.add("spinclass");
  setTimeout(() => {
    el.classList.remove("spinclass");
  }, 10000); // 10 seconds
}
spinbody();

spinEl(villasonriotext);
villasonriotext.classList.add("modifiedtext");
// spinEl(bluebutton)
