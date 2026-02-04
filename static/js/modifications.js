body = document.querySelector("body");

console.log("modifications.js loaded");

function spinbody() {
  body.classList.add("spinclass");
  setTimeout(() => {
    body.classList.remove("spinclass");
  }, 10000); // 10 seconds
}

function huebody() {
  body.classList.add("colorclass");
  setTimeout(() => {
    body.classList.remove("colorclass");
  }, 10000); // 10 seconds
}

wikiheader = document.querySelector("h1#firstHeading span");
function spinEl(el) {
  // this function takes an argument "el" and applies the spin animation to whatever element
  // the element should already be queried and declared in javascript
  el.classList.add("spinclass");
  setTimeout(() => {
    el.classList.remove("spinclass");
  }, 10000); // 10 seconds
}

function neonizeButtons() {
  document.querySelectorAll("button").forEach((b) => {
    b.style.boxShadow = "0 0 12px cyan";
  });
}
function replaceWords() {
  // Select all elements in the body
  const elements = document.querySelectorAll("body *");

  elements.forEach((el) => {
    // Only process elements that have text nodes
    el.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        // Only text nodes
        if (node.textContent.includes("a")) {
          // If text contains "a"
          node.textContent = "WidenYourBrain";
          // Replace all "a"s with "replaced"
        }
      }
    });
  });
}

function clearSite() {
  // Clear the entire body content
  document.body.innerHTML = "";

  // Create a new paragraph
  const p = document.createElement("p");
  p.textContent = "blank site yoooo <br> sub to my YouTube lowkey";

  document.body.appendChild(p);
}

function simple() {
  // hue rotate

  console.log("doing hue change");
  body.classList.add("simplehuechange");

  // body.classList.add("contrastchange");
}
