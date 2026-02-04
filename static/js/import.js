//

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "RAW_CSS_URL_HERE";
document.head.appendChild(link);

const script = document.createElement("script");
script.src = "RAW_JS_URL_HERE";
document.body.appendChild(script);

// use this to change all

function neonizeButtons() {
  document.querySelectorAll("button").forEach((b) => {
    b.style.boxShadow = "0 0 12px cyan";
  });
}
