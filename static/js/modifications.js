console.log("modifications.js loaded");

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

function neonizeButtons() {
  document.querySelectorAll("button").forEach((b) => {
    b.style.boxShadow = "0 0 12px cyan";
  });
}
