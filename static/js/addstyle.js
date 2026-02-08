body = document.querySelector("body");

console.log("modifications.js loaded");

function spinbody() {
  body.classList.add("spinclass");
  setTimeout(() => {
    body.classList.remove("spinclass");
  }, 10000); // 10 seconds
}

huerotate();

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
        if (node.textContent.includes("United States")) {
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
  p.innerHTML = "blank site yoooo <br> sub to my YouTube lowkey";

  document.body.appendChild(p);
}

function clearSitePretty() {
  document.body.innerHTML = `
    <style>
      body {
        margin: 0;
        height: 100vh;
        background: linear-gradient(135deg, #0f172a, #020617);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
        overflow: hidden;
        color: white;
      }

      .container {
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(16px);
        border-radius: 20px;
        padding: 40px 50px;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        animation: fadeIn 1.2s ease;
        z-index: 2;
      }

      h1 {
        font-size: 2.6rem;
        margin-bottom: 10px;
        letter-spacing: 0.5px;
      }

      p {
        font-size: 1.1rem;
        opacity: 0.9;
        margin-bottom: 25px;
      }

      .topics span {
        margin: 0 8px;
        font-weight: 600;
        color: #38bdf8;
      }

      button {
        background: linear-gradient(135deg, #38bdf8, #22c55e);
        border: none;
        border-radius: 999px;
        padding: 14px 34px;
        font-size: 1.1rem;
        font-weight: 700;
        cursor: pointer;
        color: #020617;
        box-shadow: 0 0 20px rgba(56, 189, 248, 0.6);
        transition: transform 0.15s ease, box-shadow 0.15s ease;
      }

      button:hover {
        transform: scale(1.05);
        box-shadow: 0 0 35px rgba(34, 197, 94, 0.9);
      }

      button.subscribed {
        background: linear-gradient(135deg, #22c55e, #4ade80);
        box-shadow: 0 0 40px rgba(34, 197, 94, 1);
        transform: scale(1.15) rotate(-2deg);
      }

      .floating {
        position: absolute;
        font-size: 1.4rem;
        opacity: 0.18;
        animation: float 14s linear infinite;
        white-space: nowrap;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }

      @keyframes float {
        from {
          transform: translateY(120vh) translateX(0);
        }
        to {
          transform: translateY(-120vh) translateX(80px);
        }
      }
    </style>

    <div class="container">
      <h1>Widen Your Brain</h1>
      <p>
        Where curiosity meets momentum.
      </p>
      <div class="topics">
        <span>technology</span>
        <span>business</span>
        <span>art</span>
        <span>creativity</span>
      </div>
      <br>
      <button id="subBtn">Subscribe</button>
    </div>

    <div class="floating" style="left: 10%; animation-duration: 16s;">coding</div>
    <div class="floating" style="left: 25%; animation-duration: 18s;">piano 🎹</div>
    <div class="floating" style="left: 45%; animation-duration: 14s;">chess ♟️</div>
    <div class="floating" style="left: 65%; animation-duration: 20s;">creativity</div>
    <div class="floating" style="left: 80%; animation-duration: 17s;">technology</div>
  `;

  document.getElementById("subBtn").addEventListener("click", (e) => {
    e.target.textContent = "Subscribed ✔";
    e.target.classList.add("subscribed");
  });
}

function simple() {
  // hue rotate

  console.log("doing hue change");
  body.classList.add("simplehuechange");

  // body.classList.add("contrastchange");
}

// end of modifications.js
function wordchange() {
  const elements = document.querySelectorAll("body *");

  elements.forEach((el) => {
    el.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {
        const span = document.createElement("span");
        span.textContent = node.textContent;
        span.classList.add("wordclass");

        el.replaceChild(span, node);
      }
    });
  });
}

const style = document.createElement("style");
style.textContent = `@keyframes colorwheel {
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
  filter: hue-rotate(100deg);
}

.contrastchange {
  filter: contrast(200%);
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
  display: inline-block;
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

@keyframes wordchange {
  0% {
    font-family: Arial, Helvetica, sans-serif;
    transform: scale(1) translateX(0px) translateY(0px);
  }
  50% {
    font-family: Arial, Helvetica, sans-serif;
    transform: scale(1.3) translateX(-30px) translateY(50px);
    font-weight: bold;
    color: rgb(37, 171, 72);
  }
  100% {
    font-family: Arial, Helvetica, sans-serif;
    transform: scale(1) translateX(0px) translateY(0px);
  }
}
.wordclass {
  animation: wordchange 10s ease;
}

body.darkmode {
  filter: invert(1) hue-rotate(180deg);
}

.square {
  height: 300px;
  width: 300px;
} /*# sourceMappingURL=main.css.map */
`;
document.head.appendChild(style);
console.log("added the css code");
