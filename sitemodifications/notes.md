# I should host the css on a repo then reference that

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://your-site.com/spin.css";
document.head.appendChild(link);

So I just need to run a single javascript file to get all the code in

const script = document.createElement("script");
script.src = "https://raw.githubusercontent.com/WidenYourBrain/webstuff/main/static/js/imports.js";
document.body.appendChild(script);
