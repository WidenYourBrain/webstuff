body = document.querySelector("body");

// this is on apples homepage
const bluebutton = document.querySelector(
  "a.button.button-elevated.button-primary"
);

// this is on teslas homepage
const teslalogo = document.querySelector("a.tds-site-logo-link");

const style = document.createElement("style");
style.textContent = `
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

// unrelated
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
`;
document.head.appendChild(style);

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
