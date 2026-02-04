//

function imports() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://raw.githubusercontent.com/WidenYourBrain/webstuff/main/static/css/main.css";
  document.head.appendChild(link);
  console.log("Added css");

  const script = document.createElement("script");
  script.src =
    "https://raw.githubusercontent.com/WidenYourBrain/webstuff/main/static/js/modifications.js";
  document.body.appendChild(script);
  console.log("Added script");
}

// use this to change all
imports();
